import React, { useEffect } from 'react'
import './Industries.css'
import roads from '../../assets/Roads.jpg'
import wind from '../../assets/windturbine.jpg'
import urban from '../../assets/urban.jpg'
import airline from '../../assets/airline.jpg'
import hospitality from '../../assets/hospitality.jpg'
import yoga from '../../assets/yoga.jpg'
import restaurant from '../../assets/restaurant.jpg'
import bot from '../../assets/bot.jpg'

const Industries = () => {

     useEffect(() => {
    const cards = document.querySelectorAll('.cards');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-hover'); // add hover effect
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of the card is visible
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
   <div className='Industries' id='projects'>
        <div className='project-heading'>
            <h2>Project Scope</h2>
            <p>We Operate In Multiple Industries</p>
        </div>

        <div className='cards-container'>
            <div className='cards'>
                <img src={hospitality}/>
                <div className='card-des'><h3>Hospitality</h3>
                <p>Delivering high quality hotel and resort developments focused on exceptional guest experiences, operational efficiency, and long term value.</p>
                </div>
            </div>

            <div className='cards'>
                <img src={yoga}/>
                <div className='card-des'><h3>Wellness</h3>
                <p>Developing wellness centers, retreats, and health focused environments promoting relaxation, fitness, recovery, and holistic lifestyle improvement.</p>
                </div>
            </div>

            <div className='cards'>
                <img src={airline}/>
                <div className='card-des'>
                    <h3>Airline GSA</h3>
                    <p>Providing complete airline representation services including sales, ticketing, cargo management, marketing support, and regional operational coordination.</p></div>
            </div>

            <div className='cards'>
                <img src={urban}/>
                <div className='card-des'><h3>Mix Development</h3>
                <p>Creating integrated communities combining residential, commercial, entertainment, and lifestyle spaces for dynamic modern living experiences.</p>
                </div>
            </div>

            <div className='cards'>
                <img src={wind}/>
                <div className='card-des'><h3>Renewable Energy</h3>
                <p>Driving sustainable growth through efficient solar, wind, hydro, and biomass energy projects powering environmentally responsible development.</p>
                </div>
            </div>

            <div className='cards'>
                <img src={restaurant}/>
                <div className='card-des'><h3>Restaurant Chains</h3>
                <p>Building scalable restaurant networks supported by consistent quality, strong branding, operational efficiency, and strategic expansion planning.</p>
                </div>
            </div>

            <div className='cards'>
                <img src={bot}/>
                <div className='card-des'><h3>BOT and BOOT Projects</h3>
                <p>Delivering infrastructure through build operate transfer models enabling private development, temporary ownership, efficient operations, and structured handover.</p>
                </div>
            </div>

        </div>
</div>

  )
}

export default Industries
