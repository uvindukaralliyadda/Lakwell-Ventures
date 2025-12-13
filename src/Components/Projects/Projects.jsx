import React from 'react'
import './Projects.css'
import roads from '../../assets/Roads.jpg'
import wind from '../../assets/windturbine.jpg'
import urban from '../../assets/urban.jpg'
import airline from '../../assets/airline.jpg'
import hospitality from '../../assets/hospitality.jpg'
import yoga from '../../assets/yoga.jpg'
import restaurant from '../../assets/restaurant.jpg'
import bot from '../../assets/bot.jpg'



const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='project-heading'>
         <h2>Projects We Invest In</h2>
         <p>We partner with ventures across diverse sectors, providing capital and strategic support to help them grow.</p>
      </div>
      <div className='project-images'>
                  <div className='project-article'>
                      <img src={hospitality}/>
                      <div className='project-des'><h3>Hospitality</h3>
                      <p>Investing in hotels, resorts, tourism worldwide.</p>
                      </div>
                  </div>
      
                  <div className='project-article'>
                      <img src={yoga}/>
                      <div className='project-des'><h3>Wellness</h3>
                      <p>Supporting wellness, spa, holistic health businesses.</p>
                      </div>
                  </div>
      
                  <div className='project-article'>
                      <img src={airline}/>
                      <div className='project-des'>
                          <h3>Airline GSA</h3>
                          <p>Partnering with airlines for global distribution.</p></div>
                  </div>
      
                  <div className='project-article'>
                      <img src={urban}/>
                      <div className='project-des'><h3>Mix Development</h3>
                      <p>Financing integrated retail, residential, commercial projects.</p>
                      </div>
                  </div>
      
                  <div className='project-article'>
                      <img src={wind}/>
                      <div className='project-des'><h3>Renewable Energy</h3>
                      <p>Funding sustainable solar, wind, hydro projects.</p>
                      </div>
                  </div>
      
                  <div className='project-article'>
                      <img src={restaurant}/>
                      <div className='project-des'><h3>Restaurant Chains</h3>
                      <p>Scaling restaurant brands nationally and globally.</p>
                      </div>
                  </div>
      
                  <div className='project-article'>
                      <img src={bot}/>
                      <div className='project-des'><h3>BOT and BOOT Projects</h3>
                      <p>Backing global infrastructure via BOT, BOOT.</p>
                      </div>
                  </div>
      
              </div>
    </div>
  )
}

export default Projects
