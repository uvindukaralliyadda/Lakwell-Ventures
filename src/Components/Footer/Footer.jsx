import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <h2>Reeyan Ventures</h2>
            <p>Reeyan Ventures connects foreign investors with Sri Lankan projects, 
                ensuring trusted, efficient, and successful investment solutions.</p>
        </div>
        <div className='footer-1'>
            <h2>Quick Links</h2>
            <ul>
                <li><a href='#hero' >Home</a></li>
                <li><a href='#about' >About</a></li>
                <li><a href='#services' >Services</a></li>
                <li><a href='#peoples' >People</a></li>
                <li><a href='#projects' >Industries</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <div className='footer-1'>
            <h2>Services</h2>
            <ul>
                <li>Investment Facilitation</li>
                <li>Tailored Investment Consultation</li>
                <li>Investment Registration</li>
                
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
