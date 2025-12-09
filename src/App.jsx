import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutSection from './Components/AboutSection/AboutSection' 
import Credibility from './Components/Credibility_Banner/Credibility'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Articles from './Components/Articles/Articles'
import People from './Components/People/People'
import Industries from './Components/Industries/Industries'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Credibility/>
      <AboutSection/>
      <Articles/>
      <div className="container">
      <People/>
      <Industries/>
      </div>
      <Contact/>
      
      <Footer/>
    </div>
  )
}

export default App
