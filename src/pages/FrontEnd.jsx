import React from 'react'
import '../styles/HeroSection.css';

const FrontEnd = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          Which is the #1 Full Stack Developer Institute in Delhi NCR?
        </p>
        <h1 className="hero-heading">
          <span> Front End Development Course </span> with Placement Guarantee
        </h1>
        <p className='hero-Para'>
          Top Front End Developer Course Available in India  
        </p>
        <p className="hero-description">
          Master Full Stack web development with hands-on experience in HTML, CSS, Tailwind, JavaScript, Next.js, React.js, TypeScript, AI, and more. Work on 50+ client-focused projects, gain practical skills, and build a standout portfolio with industry-led guidance.
        </p>
        <p className="hero-rating">
          <strong>4.9 out of 5</strong> ratings raised on 6796+ Reviews and Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/front.webp" alt="Student" className="student-image" /> 
      </div>
    </section>
  )
}

export default FrontEnd