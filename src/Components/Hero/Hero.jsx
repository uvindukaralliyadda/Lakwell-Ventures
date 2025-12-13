import React from 'react'
import './Hero.css'
import hero from '../../assets/Hero.jpg'
import profilePDF from '../../assets/Reyaan Ventures - Coporate Profile.pdf';


const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      <div className='hero-text'>
        <h1>Connecting Opportunities With Capital And Strategic Partnerships</h1>
        <p>We bridge businesses and investors for successful transactions</p>
        <div className='buttons'>
        <a href={profilePDF} download="Company_Profile.pdf"><button className='btn '>Company Profile</button></a>
        <a href='#contact'><button className='btn1'>Contact</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
