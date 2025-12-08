import React from 'react'
import './People.css'
import chairmanImage from '../../assets/chairman.jpg'

const People = () => {
  return (
    <div id='peoples' className='PeopleOver'>
        <h2 className='peoples-header'>About Chairman</h2>
    
    <div className='people'>
        <div className='people-image'>
            <img src={chairmanImage} alt="Chairman" />
            <div className='people-image-details'>
            <h3>Mr. Jayantha Wickramasinghe</h3>
            <h4>Chairman - Reeyan Ventures</h4>
            <hr/>
            <span>BSc (Hons) Uk, Business Computing - University of Northumbria.</span>
            <span>MSc/M.Litt International Business - University of St. Andrews (Scotland)</span>
            </div>
      </div>

      <div className='people-header'>
        
        <p>Jayantha Wickramasinghe is a seasoned business professional with over 17 years of experience in trading and
            manufacturing at Solex group. He has accumulated over 10 years of experience in renewable energy project development
            and execution through Lakwell Solar and Lakwell Energy</p>
        <p>He also do counsultancy for some of the leading construction companies and solutions providers in Sri Lanka</p>
      </div>
      </div>
    </div>
  )
}

export default People
