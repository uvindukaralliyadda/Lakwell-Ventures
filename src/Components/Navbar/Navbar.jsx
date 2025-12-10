import React , { useState } from 'react'
import './Navbar.css'

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
      <h2 className='logo'><a href='#hero'>Reyaan Ventures</a></h2>

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
          <a href='#contact' onClick={closeMenu}>
          <button className='btn'>
            Get In Touch
          </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
