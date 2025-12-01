import React , { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='container'>
      <h2 className='logo'><a href='#hero'>Lakwell</a></h2>

       {/* Hamburger for mobile */}
      <div className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <ul className={isOpen ? 'active' : ''}>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#projects'>Project Scope</a></li>
        <li><button className='btn'><a href='#contact'>Get In Touch</a></button></li>
      </ul>
    </nav>
  )
}

export default Navbar
