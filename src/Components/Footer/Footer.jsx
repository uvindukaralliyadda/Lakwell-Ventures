import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footerx'>
          <div className='footer-1'>
            <h2>Reyaan Ventures</h2>
            <p>Reyaan Ventures connects foreign investors with Sri Lankan projects, 
                ensuring trusted, efficient, and successful investment solutions.</p>
          </div>
        </div>
        <div className='footerx'>
          <div className='footer-2'>
            <h2>Quick Links</h2>
            <ul>
              <li><a href='#hero'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#peoples'>People</a></li>
              <li><a href='#projects'>Industries</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className='footerx'>
          <div className='footer-3'>
            <h2>Services</h2>
            <ul>
              <li><a href='#i-con'>Investment Consultation</a></li>
              <li><a href='#i-fac'>Investment Facilitation</a></li>
              <li><a href='#i-reg'>Investment Registration</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2025 Reyaan Ventures. All Rights Reserved.</p>
        <b><p><a href="https://karalliyaddaone.com" target="_blank" rel="noopener noreferrer">Designed and Developed by K1</a> </p></b>
      </div>
    </div>
  )
}

export default Footer
