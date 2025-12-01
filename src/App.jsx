import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutSection from './Components/AboutSection/AboutSection' 
import H_Services from './Components/H_Services/H_Services'
import Credibility from './Components/Credibility_Banner/Credibility'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Credibility/>
      <AboutSection/>
      <div className="container">
      <H_Services/>
      <Project/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
