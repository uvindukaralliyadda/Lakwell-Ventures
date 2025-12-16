import React from 'react'
import './AboutSection.css'
import imagee from '../../assets/Hero.jpg'
import { motion } from "motion/react"

const AboutSection = () => {
  return (
    <motion.div className='AboutOver' id='about' initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 2 }}>
      <motion.div className='abouts' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
        <h2>About Company</h2>
        <p>Reyaan Ventures Private Limited is a leading investments facilitator firm based in the Sri Lanka. We specialize in facilitating foreign investment into the country by connecting potential investors with government and private sector projects. Our strong relationships with key government officials and a proven track record of successful investment deals within a short period of our existence, have earned us the trust and confidence of both government and private companies.</p>

      </motion.div>
      <motion.div className='abouts2' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
        <img src={imagee}/>
      </motion.div>
    </motion.div>
  )
}

export default AboutSection
