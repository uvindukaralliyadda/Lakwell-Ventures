import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <h2>Lakwell</h2>
            <p>Lakwell Ventures connects foreign investors with Sri Lankan projects, 
                ensuring trusted, efficient, and successful investment solutions.</p>
        </div>
        <div className='footer-1'>
            <h2>Quick Links</h2>
            <ul>
                <li><a href='#hero' onClick={closeMenu}>Home</a></li>
                <li><a href='#about' onClick={closeMenu}>About</a></li>
                <li><a href='#services' onClick={closeMenu}>Services</a></li>
                <li><a href='#services' onClick={closeMenu}>People</a></li>
                <li><a href='#projects' onClick={closeMenu}>Industries</a></li>
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
