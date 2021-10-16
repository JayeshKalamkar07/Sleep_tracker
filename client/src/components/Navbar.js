import React from 'react'
import { NavLink } from 'react-router-dom'
import sleepy from "../images/sleepy.png"




const Navbar = () => {
  return (
    <nav className="navbar navbarmain navbar-expand-lg text-light ">
      <NavLink className="navbar-brand text-light" to=""><img src={sleepy} alt="logo" /> </NavLink>

      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/"> HOME </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Main">TRACKER</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">PROFILE</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">CONTACT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">LOGIN</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Signup">SIGN UP</NavLink>
          </li>
                  </ul>

      </div>
    </nav>
  )
}

export default Navbar
