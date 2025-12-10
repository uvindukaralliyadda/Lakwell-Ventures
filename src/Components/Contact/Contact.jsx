import React, { useState } from 'react'
import './Contact.css'
import mobile from '../../assets/contact.png'
import location from '../../assets/location.png'
import emailIcon from '../../assets/email.png'

const Contact = () => {
  
  

  return (
    <div className='contact' id='contact'>
      <h2>Get In Touch With Us Now!</h2>
      
      <div className='contact-header'>
  
          <div className='contact-square'>
            <img src={emailIcon}/>
            <h3>Email</h3>
            <p>Reyaan@reyaanventures.com</p>
            <p>Reyaan@gmail.com</p>
          </div>
          <div className='contact-square'>
            <img src={mobile}/>
            <h3>Phone Number</h3>
            <p>+94 74 135 1434</p>
          </div>
          <div className='contact-square'>
            <img src={location}/>
            <h3>Location</h3>
            <p>Reyaan Ventures,<br/> Bandaranayekapura Rd,<br/>Rajagiriya</p>
          </div>
          
        
      </div>
    </div>
  )
}

export default Contact
