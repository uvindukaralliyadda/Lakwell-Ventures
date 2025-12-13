import React from 'react'
import './Credibility.css'
import crowd from '../../assets/crowd.png'
import deals from '../../assets/deals.png'
import rating from '../../assets/rating.png'

const Credibility = () => {
  return (
    <div className='credible'>
      <div className='credibility' >
        <img src={deals} loading="lazy"/>
        <h2>50+</h2>
        <p>Successful projects mediated</p>
      </div>
      <div className='credibility' >
        <img src={crowd} loading="lazy"/>
        <h2>10+</h2>
        <p>Active global investors in our network</p>
      </div>
      <div className='credibility' >
        <img src={rating} loading="lazy"/>
        <h2>98%</h2>
        <p>Client satisfaction rating</p>
      </div>
    </div>
  )
}

export default Credibility
