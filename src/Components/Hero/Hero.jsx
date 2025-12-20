import React from 'react'
import './Hero.css'
import video1 from '../../assets/video1.mp4'
import profilePDF from '../../assets/Reyaan Ventures - Coporate Profile.pdf'
import download from '../../assets/download.png'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>

      {/* Single looping video */}
      <video
        className='hero-video'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video1} type='video/mp4' />
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
            <button className='btn'><img src={download}/>Download Company Profile</button>
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
