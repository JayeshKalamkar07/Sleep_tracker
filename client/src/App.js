import './App.css';

import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Main from './components/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


const App = () => {
  return (
  
  <>
      <Navbar/>
      <Switch>

      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/About">
      <About />
      </Route>

      <Route path="/Main">
      <Main />
      </Route>


      <Route path="/Contact">
      <Contact />
      </Route>

      <Route path="/Login">
      <Login />
      </Route> 
      
       <Route path="/Signup">
      <Signup />
      </Route>
     
      <Route>
      <Errorpage />
      </Route>
      
      
      </Switch>
      
      </>
  )
}


export default App