import React, { useState } from 'react'
import './Contact.css'
import mobile from '../../assets/pHone.png'
import location from '../../assets/finallocation.png'
import emailIcon from '../../assets/icons8-email-30.png'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    // Validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setResult('⚠️ Please fill out all fields before submitting.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setResult('⚠️ Please enter a valid email address.')
      return
    }

    const phonePattern = /^[0-9+ ]{7,15}$/
    if (!phonePattern.test(form.phone)) {
      setResult('⚠️ Please enter a valid phone number.')
      return
    }

    // Prepare data for submission
    const formData = new FormData()
    formData.append('access_key', 'a359ee39-0e66-494d-b43d-aa163768192c')
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('message', form.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      if (data.success) {
        setResult('✅ Message sent successfully!')
        setForm({ name: '', email: '', phone: '', message: '' }) // reset
      } else {
        setResult('❌ Error sending message. Please try again.')
      }
    } catch (error) {
      setResult('❌ Network error. Please try again later.')
    }
  }

  return (
    <div className='contact' id='contact'>
      <h2>Get In Touch</h2>
      <p>Feel free to reach us through contact form or find our contact information below</p>

      <div className='contact-header'>
        <div className='contact-info'>
          <h2>Contact Us!</h2>
          <ul>
            <li><img src={emailIcon}/>jayantha@lakwellventures.lk</li>
            <li><img src={mobile}/>+94 76 667 6496</li>
            <li><img src={location}/>Lakwell Ventures,<br/> Bandaranayekapura Rd,<br/>Rajagiriya</li>
          </ul>
        </div>

        <div className='contact-form'>
          <h2>Fill this up. We will reach you with 1-2 days!</h2>
          <form onSubmit={onSubmit} noValidate>
            <label>Full Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' value={form.name} onChange={handleChange} />
            <label>Email</label>
            <input type='email' name='email' placeholder='Enter Your Email' value={form.email} onChange={handleChange} />
            <label>Mobile</label>
            <input type='tel' name='phone' placeholder='Enter Your Mobile Number' value={form.phone} onChange={handleChange} />
            <label>Write Your Messages Here</label>
            <textarea name='message' placeholder='Enter Your Inquiry' cols="10" rows="5" value={form.message} onChange={handleChange}></textarea>
            <button className='btn1'>Submit</button>
            {result && <p style={{ textAlign: 'center', marginTop: '15px', color: '#fff' }}>{result}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
