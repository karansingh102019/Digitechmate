import React from 'react'
import '../styles/HeroSection.css';

const UIDev = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          Which Is the #1 UI Developer Institute in Delhi NCR? Learn from Experts and Get Hired
        </p>
        <h1 className="hero-heading">
          Top <span> UI Developer Course </span> with Placement Guarantee and Real-World Projects
        </h1>
        <p className='hero-Para'>
          Want to Master UI Development and Front-End Design? Learn UI/UX Skills from Scratch and Become Job-Ready
        </p>
        <p className="hero-description">
          Our UI UX developer course will help you both design compelling UI and implement it into functional web applications. Unlike any course, this course will help you gain both designing and software development experience amongst in-demanded techs like HTML, CSS, JavaScript, React JS, and Next JS, and top design tools including Adobe Photoshop, XD, Figma, ie, demanding job-ready skills.
        </p>
        <p className="hero-rating">
          <strong>4.9 out of 5</strong> ratings raised on 5483+ Reviews and Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/ui-developer.webp" alt="Student" className="student-image" /> 
      </div>
    </section>
  )
}

export default UIDev