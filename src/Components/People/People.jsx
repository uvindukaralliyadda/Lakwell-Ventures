import React from 'react'
import './People.css'
import { motion } from "motion/react"

const People = () => {
  return (
    <div id='peoples' className='PeopleOver'>
        <h2 className='peoples-header'>About Chairman</h2>
    
    <div className='people'>

        <motion.div className='people-image' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
            <h3> Mr. Jayantha Wickramasinghe</h3>
            <hr/>
            <p><b>BSc (Hons) Uk, Business Computing -<br/>University of Northumbria.</b></p>
            <p><b>MSc/M.Litt International Business -<br/>University of St. Andrews (Scotland)</b></p>
      </motion.div>

      <motion.div className='people-header' initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>
        <p><b>Jayantha Wickramasinghe</b> is an accomplished business leader with nearly <b>20 years of experience</b> in trading and manufacturing at <b>Solex group</b>. He also brings over <b>10 years of expertise in renewable energy</b> through his involvement in project development and execution at <b>Lakwell Solar</b> and <b>Lakwell Energy.</b></p>
        <p>He additionally provides <b>consultancy services</b> to several <b>leading construction companies</b> and <b>solution providers</b> across Sri Lanka.</p>
      </motion.div>
      
      </div>
    </div>
  )
}

export default People
