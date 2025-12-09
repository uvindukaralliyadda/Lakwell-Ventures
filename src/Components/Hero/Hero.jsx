import React from 'react'
import './Hero.css'
import hero from '../../assets/Hero.jpg'
import profilePDF from '../../assets/Lakwell Ventures Company Profile.pdf';

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      <div className='hero-text'>
        <h1>Connecting Opportunities With Capital And Strategic Partnerships</h1>
        <p>We bridge businesses and investors for successful transactions</p>
        <div className='buttons'>
        <button className='btn '><a href={profilePDF} download>Company Profile</a></button>
        <button className='btn1'><a href='#contact'>Contact</a></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
