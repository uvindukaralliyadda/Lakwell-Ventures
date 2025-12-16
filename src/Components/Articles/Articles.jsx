import React from 'react'
import './Articles.css'
import investment from '../../assets/Investment.jpg'
import consultant from '../../assets/consultant.jpg'
import register from '../../assets/register.jpg'
import { motion } from "motion/react"

const Articles = () => {
  return (
    <motion.div class="containerx" id='services' initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 2 }}>
        <div className='service-header' id='services'>
        <h2>Our Services</h2>
        <p><b>Backing Businesses With Capital, Strategy and Guidance.</b></p>
        </div>
         <motion.div class="card__container" initial={{ opacity: 0 }} whileInView={{opacity: 1 }} transition={{ duration: 2 }}>

            <article class="card__article" id='i-con'>
               <img src={consultant} alt="image" class="card__img"/>

               <div class="card__data">
                  <h2 class="card__title">Investment Consultancy</h2>
                  <span class="card__description">Expert insights shaping smarter investment decisions.</span>
                  
                  
               </div>
            </article>
            
            <article class="card__article" id='i-fac'>
               <img src={investment} alt="image" class="card__img"/>

               <div class="card__data">
                    <h2 class="card__title">Investment Facilitation</h2>
                     <span class="card__description">Seamlessly guiding investors through every process.</span>
                  
                  
               </div>
            </article>

            <article class="card__article" id='i-reg'>
               <img src={register} alt="image" class="card__img"/>

               <div class="card__data">
                  <h2 class="card__title">Investment Registration</h2>
                  <span class="card__description">Complete assistance to register investments smoothly.</span>
                  
                  
               </div>
            </article>
         </motion.div>
         </motion.div>
  )
}

export default Articles
