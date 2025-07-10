import React from 'react'
import '../styles/HeroSection.css';


const BackendDev = () => {
  return (
     <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          #1 Best Backend Development Institute in Delhi NCR
        </p>
        <h1 className="hero-heading">
          Professional <span>Backend Developer Course</span> with Placement Guarantee
        </h1>
        <p className='hero-Para'>
          Master Building APIs, RDBMS, and Real-World Web Applications with Hands-On Professional Training  
        </p>
        <p className="hero-description">
          Learn beyond just languages and DMBS. Get your hands on industry-demand concepts such as database management, API development, security protocols, website optimization, SOLID principles, and deployment strategies, with this backend development course. Plus, work on more than 50+ live projects and real industry case studies with our experienced professionals.
        </p>
        <p className="hero-rating">
          <strong>4.9 out of 5</strong> ratings raised on 5889+ Reviews and Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/backend.webp" alt="Student" className="student-image" /> 
      </div>
    </section>
  )
}

export default BackendDev