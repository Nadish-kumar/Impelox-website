import React from 'react'
import "../Header/Header.css"
import logo from "../../asset/impelox.svg";
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className='container-fluid header_common_color'>
    <div className="container">
    <div className="company_header">
      <div className="company_header_left">
        <img className="company_logo" src={logo} alt="logo" />
      </div>
      <div className="company_header_right">
        <ul className="option_body">
        <Link className='menu-link' to='/'>
          <li className="menu">Home</li>
          </Link>
          <Link className='menu-link'  to='/career'>
          <li className="menu">Careers</li>
          </Link>
          <Link className='menu-link' to="/company">
          <li className="menu">Company</li>
          </Link>
          <Link className='menu-link' to="/contact">
          <li className="menu">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  
  </div>
  </div>
  )
}

export default Header