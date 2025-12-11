import React from 'react'
import './People.css'
import chairmanImage from '../../assets/chairman.jpg'

const People = () => {
  return (
    <div id='peoples' className='PeopleOver'>
        <h2 className='peoples-header'>About Chairman</h2>
    
    <div className='people'>

        <div className='people-image'>
            <h3> Mr. Jayantha Wickramasinghe</h3>
            <hr/>
            <p><b>BSc (Hons) Uk, Business Computing -<br/>University of Northumbria.</b></p>
            <p><b>MSc/M.Litt International Business -<br/>University of St. Andrews (Scotland)</b></p>
      </div>

      <div className='people-header'>
        <p><b>Jayantha Wickramasinghe</b> is an accomplished business leader with nearly <b>20 years of experience</b> in trading and manufacturing at <b>Solex group</b>. He also brings over <b>10 years of expertise in renewable energy</b> through his involvement in project development and execution at <b>Lakwell Solar</b> and <b>Lakwell Energy.</b></p>
        <p>He additionally provides <b>consultancy services</b> to several <b>leading construction companies</b> and <b>solution providers</b> across Sri Lanka.</p>
      </div>
      
      </div>
    </div>
  )
}

export default People
