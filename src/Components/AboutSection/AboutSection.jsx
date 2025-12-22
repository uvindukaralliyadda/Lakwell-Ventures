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
        <p>Reyaan Ventures Private Limited is a leading investments facilitator with a firm based in Sri Lanka & Bangladesh. We specialize in facilitating foreign investment into the countries by connecting potential investors with private sector collaborations and join venture. Our strong relationships with key personnel with a proven track record of successful investment negotiations within a short period of our existence, have earned us the trust and confidence of different sectors.</p>

      </motion.div>
      <motion.div className='abouts2' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
        <img src={imagee}/>
      </motion.div>
    </motion.div>
  )
}

export default AboutSection
