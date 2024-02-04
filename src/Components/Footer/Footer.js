import React from 'react'
import '../Footer/Footer.css'
import linked from "../../asset/linked.svg"
import logo from "../../asset/impelox.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <div className='footer' id='footer'>
      <div className='footer_content'>
      <div className='left_footer_content'>
        <div className='footer_logo'>
        <img  src={logo} alt="logo" />
        </div>
      
        <div className='sub_footer'>
          <p className='footer_header'>Get in Touch</p>
          <Link to='/career' className='menu-link'> <p className='footer_header'>Careers</p></Link>
         <Link to='/company' className='menu-link'><p className='footer_header'>Team</p></Link>
        </div>
        <p className='rights' >© Impelox tech Pvt. Ltd 2023 | All Rights Reserved</p>
      </div>
      <div className='right_footer_content'>
       <div className='right_subfooter'>
        <div className='linked_icon'>
          <a href='https://www.linkedin.com/company/impelox-tech/' target='_blank'  rel="noreferrer">
           <img src={linked} alt="linked in logo" />  </a></div>
        <p className='email'>Contact@impelox.com</p>
       </div>
       <p className='address'> Plot no. 6 Kumarasamy Nagar, Sholinganallur<br />  Chennai,  India.  Pincode - 600119</p>
       {/* <p className='address'> Plot no. 6 Kumarasamy Nagar,<br /> Sholinganallur Chennai,  India.<br /> Pincode - 600119</p> */}
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer