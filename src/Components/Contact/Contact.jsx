import React, { useState } from 'react'
import './Contact.css'
import mobile from '../../assets/contact.png'
import location from '../../assets/location.png'
import emailIcon from '../../assets/email.png'
import { motion } from "motion/react"

const Contact = () => {
  

  return (
    <div className='contact' id='contact' >
      <h2>Get In Touch With Us Now!</h2>
      
      <div className='contact-header'>
  
          <motion.div className='contact-square' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
            <img src={emailIcon}/>
            <h3>Email</h3>
            <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@reyaanventures.com" target="_blank" rel="noopener noreferrer"><p>info@reyaanventures.com</p></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=reyaan@gmail.com"  target="_blank" rel="noopener noreferrer" className="email-link"><p>Reyaan@gmail.com</p></a>
          </motion.div>
          <motion.div className='contact-square' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
            <img src={mobile}/>
            <h3>Phone Number</h3>
            <a href="tel:+94741351434" className="phone-link"><p>+94 74 135 1434</p></a>
          </motion.div>
          <motion.div className='contact-square' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
            <img src={location}/>
            <h3>Location</h3>
            <p>70/2/3B,<br/> D S Senanayake Mawatha,<br/>Colombo 08,<br/>00800</p>
          </motion.div>
          
        
      </div>
    </div>
  )
}

export default Contact
