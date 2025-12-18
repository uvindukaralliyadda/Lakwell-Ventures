import React from 'react'
import './Hero.css'
import video1 from '../../assets/hero1.mp4'
import video2 from '../../assets/hero2.mp4'
import profilePDF from '../../assets/Reyaan Ventures - Coporate Profile.pdf'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      {/* First Video */}
      <video className='hero-video video1' autoPlay muted loop>
        <source src={video1} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      
      {/* Second Video */}
      <video className='hero-video video2' autoPlay muted loop>
        <source src={video2} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className='hero-overlay'></div>

      {/* Text Content */}
      <div className='hero-text'>
        <h1>Connecting Opportunities With Capital And Strategic Partnerships</h1>
        <p>Sri Lanka's Leading Venture Capital Firm</p>
        <div className='buttons'>
          <a href={profilePDF} download="Company_Profile.pdf">
            <button className='btn'>Download Company Profile</button>
          </a>
          <a href='#contact'>
            <button className='btn1'>Contact</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
