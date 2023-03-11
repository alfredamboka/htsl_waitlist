import React from 'react'
import './Body.css'
import { banner, contentFive, contentFour, contentOne, contentSix, contentThree, contentTwo } from '../../assets'

const Body = () => {
  return (
    <div  className='body-container'>
      <div className="body-banners">
        <img src={banner} alt="the company banners" />
      </div>  
      <div className="body-header">
        <h1>Benefits Using Our Services</h1>
      </div>
      <div className="body-content">
        <div className="card">
          <figure>
            <img src={contentOne} alt="" />
            <figcaption className='title'>Key Solutions</figcaption>
            <figcaption className='caption'>Be the First in Line for Financial Innovation: How Queueing Up for the Latest Fintech Product Can Benefit you and others.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={contentTwo} alt="" />
            <figcaption className='title'>Cloud Storage</figcaption>
            <figcaption className='caption'>Be the Early Adopter: How Joining the Queue for a Fintech Product Can Help You Stay Ahead of the Financial Game.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={contentThree} alt="" />
            <figcaption className='title'>Our Dedicated Support</figcaption>
            <figcaption className='caption'>Be the First in Line for Financial Innovation: How Queueing Up for the Latest Fintech Product Can Benefit you and others.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={contentFour} alt="" />
            <figcaption className='title'>Project Analysis</figcaption>
            <figcaption className='caption'>Queue for the Future of Finance: Why Joining the Line for the Hottest Fintech Product is a Smart Move. Join now for the analysis.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={contentFive} alt="" />
            <figcaption className='title'>Fast Paced Work</figcaption>
            <figcaption className='caption'>I have also had the opportunity to work closely with cross-functional teams, collaborating with engineers, marketers, and product managers.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={contentSix} alt="" />
            <figcaption className='title'>Agile Team</figcaption>
            <figcaption className='caption'>My experience includes working with both physical and digital products, and I am well-versed in using design softwares.</figcaption>
            <figcaption className='learn-more-btn'>Learn more</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Body