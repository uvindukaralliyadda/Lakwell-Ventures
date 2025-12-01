import React from 'react'
import './Project.css'
import roads from '../../assets/Roads.jpg'
import water from '../../assets/water.jpg'
import fisheries from '../../assets/fisheries.jpg'
import agriculture from '../../assets/agriculture.jpg'
import IT from '../../assets/IT.jpg'
import medicare from '../../assets/medicare.jpg'

const Project = () => {
  return (
    <div className='projects' id='projects'>
        <div className='project-heading'>
            <h2>Project Scope</h2>
            <p>We Operate In Multiple Industries</p>
        </div>
        <div className='img-section'>
            <div className='pro-image'>
                <img src={roads}/>
                <div className='caption1'><p>Roads & Highways</p></div>
            </div>
            <div className='pro-image'>
                <img src={water}/>
                <div className='caption1'><p>Water & Sewarage</p></div>
            </div>
            <div className='pro-image'>
                <img src={fisheries}/>
                <div className='caption1'><p>Fisheries</p></div>
            </div>
            <div className='pro-image'>
                <img src={agriculture}/>
                <div className='caption1'><p>Agriculture</p></div>
            </div>
            <div className='pro-image'>
                <img src={IT}/>
                <div className='caption1'><p>IT Companies</p></div>
            </div>
            <div className='pro-image'>
                <img src={medicare}/>
                <div className='caption1'><p>Medicare Facilitation</p></div>
            </div>
        </div>
      
    </div>
  )
}

export default Project
