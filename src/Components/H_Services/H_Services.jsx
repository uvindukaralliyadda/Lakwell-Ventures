import React from 'react'
import './H-Services.css'
import investment from '../../assets/Investment.jpg'
import consultant from '../../assets/consultant.jpg'
import register from '../../assets/register.jpg'

const H_Services = () => {
  return (
    
    <div >
        <div className='service-header' id='services'>
        <h2>Our Services</h2>
        <p>Professional mediation ensuring smooth transparent high value deals</p>
        </div>
        <div className='services'>
        <div className='service'>
            <img src={investment}/>
            <div className='caption'><p>Investment Facilitating</p></div>
        </div>
        <div className='service'>
            <img src={consultant}/>
            <div className='caption'><p>Tailored Investment Consultation</p></div>
        </div>
        <div className='service'>
            <img src={register}/>
            <div className='caption'><p>Investment Registration</p></div>
        </div>
      </div>
    </div>
  )
}

export default H_Services
