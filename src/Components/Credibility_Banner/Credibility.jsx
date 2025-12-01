import React from 'react'
import './Credibility.css'
import crowd from '../../assets/crowd.png'
import deals from '../../assets/deals.png'
import rating from '../../assets/rating.png'

const Credibility = () => {
  return (
    <div className='credible'>
      <div className='credibility'>
        <img src={deals}/>
        <h2>120+</h2>
        <p>Successful deals mediated</p>
      </div>
      <div className='credibility'>
        <img src={crowd}/>
        <h2>40+</h2>
        <p>Active global investors in our network</p>
      </div>
      <div className='credibility'>
        <img src={rating}/>
        <h2>98%</h2>
        <p>Client satisfaction rating</p>
      </div>
    </div>
  )
}

export default Credibility
