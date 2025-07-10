import React from 'react'
import '../styles/HeroSection.css';

const BlockchainDeveloper = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          #1 Top Blockchain Developer Training Institute in Delhi NCR
        </p>
        <h1 className="hero-heading">
          Master <span> Blockchain Developer Course </span> with Placement Guarantee
        </h1>
         <p className='hero-Para'>
          Master Building APIs, RDBMS, and Real-World Web Applications with Hands-On Professional Training  
        </p>
        <p className="hero-description">
         Our Blockchain developer course in Delhi for beginners will help you master basic-advanced concepts of Blockchain such as Blockchain architecture & layers, cryptocurrencies, and more. With this course, you'll gain hands-on training with 30+ live projects and case studies. Learn in-demand techs including Python, Solidity, Ethereum, Bitcoin, and more.
        </p>
        <p className="hero-rating">
          <strong>4.9 out of 5</strong> ratings raised on 3747+ Reviews and Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/blockchain.webp" alt="Student" className="student-image" /> 
      </div>
    </section>
  )
}

export default BlockchainDeveloper