import React , { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Reyaan Logo 2.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className='container'>
      <h2 className='logo'>
        <a href='#hero'>
          <img src={logo} alt="Reyaan Ventures Logo" />
        </a>
      </h2>

      <div className='nav-toggle' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isOpen ? 'active' : ''}>
        <li><a href='#hero' onClick={closeMenu}>Home</a></li>
        <li><a href='#about' onClick={closeMenu}>About</a></li>
        <li><a href='#services' onClick={closeMenu}>Services</a></li>
        <li><a href='#peoples' onClick={closeMenu}>People</a></li>
        <li><a href='#projects' onClick={closeMenu}>Industries</a></li>
        <li>
          
          <button className='btn' id='btn3'>
            <a href='#contact' onClick={closeMenu}>
            Get In Touch</a>
          </button>
          
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
