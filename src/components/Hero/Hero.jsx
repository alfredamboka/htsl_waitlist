import React from 'react'
import './Hero.css'
import { heroIcon1, heroIcon2, heroIcon3, heroIcon4, heroIcon5, heroIcon6 } from '../../assets'
import Countdown from '../CountDown/CountDown'

const Hero = () => {
  return (
    <div  className='hero-container'>
      <div className="hero-contents">
        <div className="hero-text">
          <h1>Queue up for a cutting-edge moment with the newest technology</h1>
          <p>
            Are you eagerly waiting for the release of the latest must-have product? 
            Joining a queue for the product can have several advantages. 
          </p>
        </div>
        <div className="hero-input">
          <input 
            type="email" 
            placeholder='Email Address' 
          />
          <button type='button' >Get Early Access</button>
        </div>
        <div  className='countdown-container'>
          <Countdown />
        </div>
        <div className="logo-container">
          <div className="container">
            <img src={heroIcon1} alt="" />
            <img src={heroIcon2} alt="" />
            <img src={heroIcon3} alt="" />
            <img src={heroIcon4} alt="" />
            <img src={heroIcon5} alt="" />
            <img src={heroIcon6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero