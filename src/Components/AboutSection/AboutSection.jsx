import React from 'react'
import './AboutSection.css'
import imagee from '../../assets/Hero.jpg'

const AboutSection = () => {
  return (
    <div className='AboutOver' id='about'>
      <div className='abouts'>
        <h2>About Company</h2>
        <p>Reyaan Ventures Private Limited
is a leading investments
facilitator firm based in the Sri
Lanka. We specialize in
facilitating foreign investment
into the country by connecting
potential investors with
government and private sector
projects. Our strong
relationships with key
government officials and a
proven track record of
successful investment deals
within a short period of our
existence, have earned us the
trust and confidence of both
government and private
companies.</p>

      </div>
      <div className='abouts2'>
        <img src={imagee}/>
      </div>
    </div>
  )
}

export default AboutSection
