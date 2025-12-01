import React from 'react'
import './Contact.css'
import mobile from '../../assets/mobile.png'
import location from '../../assets/location.png'
import email from '../../assets/email.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        
            <h2>Get In Touch</h2>
            <p>Feel free to reach us through contact form or find our
                contact information below
            </p>
        
        <div className='contact-header'>
        <div className='contact-info'>
            <ul>
                <li><img src={email}/>jayantha@lakwellventures.lk</li>
                <li><img src={mobile}/>+94 76 667 6496</li>
                <li><img src={location}/>Lakwell Ventures,<br/> Bandaranayekapura Rd,<br/>Rajagiriya</li>
            </ul>
        </div>
        <div className='contact-form'>
        <form>
            <label>Full Name</label>
            <input type='text' name='name' placeholder='Enter Your Name'/>
            <label>Mobile Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Mobile Number'/>
            <label>Write Your Messages Here</label>
            <textarea name='message' placeholder='Enter Your Inquiry' cols="10" rows="5"/>
            <button className='btn1'>Submit</button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
