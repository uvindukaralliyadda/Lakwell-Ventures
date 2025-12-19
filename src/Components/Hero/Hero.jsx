import React, { useRef, useEffect } from 'react'
import './Hero.css'
import video1 from '../../assets/hero1.mp4'
import video2 from '../../assets/hero2.mp4'
import profilePDF from '../../assets/Reyaan Ventures - Coporate Profile.pdf'

const Hero = () => {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    const v1 = video1Ref.current
    const v2 = video2Ref.current

    // Start with video 1
    v1.play()

    // When video 1 ends → play video 2
    v1.onended = () => {
      v1.style.opacity = 0
      v2.style.opacity = 1
      v2.currentTime = 0
      v2.play()
    }

    // When video 2 ends → play video 1 again
    v2.onended = () => {
      v2.style.opacity = 0
      v1.style.opacity = 1
      v1.currentTime = 0
      v1.play()
    }
  }, [])

  return (
    <div className='hero-container' id='hero'>

      {/* Video 1 */}
      <video
        ref={video1Ref}
        className='hero-video'
        muted
        playsInline
      >
        <source src={video1} type='video/mp4' />
      </video>

      {/* Video 2 */}
      <video
        ref={video2Ref}
        className='hero-video'
        muted
        playsInline
        style={{ opacity: 0 }}
      >
        <source src={video2} type='video/mp4' />
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
