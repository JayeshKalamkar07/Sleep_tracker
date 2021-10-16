const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('hello world from the server router javascript')
})


//Registering route-
//This varifing weather the data is present in database or not  if not then add it into the database with using using async await. 
router.post('/register', async(req, res) => {
    const { name, email, phone, password, cpassword } = req.body
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: 'Please fill the field properly' });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'Email already Exist' });
        } else if (password != cpassword) {
            return res.status(422).json({ error: 'Passwords are  not matching' });
        } else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User registered Successfully " });
        }


    } catch (err) {
        console.log(err);
    }


});


// login route
router.post('/signin', async(req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please filled the correct data" });
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            //need to generate the token and stored cookie after password match.
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.json({ error: "Invalid email or password" });

            } else {
                res.json({ message: "SignIn  Successfully" });
            }

        } else {
            res.json({ error: "Invalid email or password" });
        }



    } catch (err) {
        console.log(err);
    }
})




// About -  thi is Main page which can be available only after authenticated user Log In
router.get('/about', authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

//authentication for Tracker page
router.get('/main', authenticate, (req, res) => {
    console.log(`Main Function`);
    res.send(req.rootUser);
});



// get user data for contactus and home page
router.get('/getdata', authenticate, (req, res) => {
    console.log(`Hello my Contact`);
    res.send(req.rootUser);
})

/// contactUs page
router.post('/contact', authenticate, async(req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            console.log("error in Contact Form");
            return res.json({ error: "Please fill the Contact Form" });
        }
        const userContact = await User.findOne({ _id: req.userID });
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();
            res.status(201).json({ message: "user Contact Successfully" });
        }

    } catch (error) {
        console.log(error);
    }



});
module.exports = router;