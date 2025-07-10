import React from "react";
import "../styles/HeroSection.css";

const Mean = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          #1 Professional MEAN Stack Developer Training Institute in Delhi NCR
        </p>
        <h1 className="hero-heading">
          Master <span> MEAN Stack Development </span> with Placement Guarantee
        </h1>
        <p className="hero-Para">
          Learn the Best MEAN Full Stack Developer Skills in India
        </p>
        <p className="hero-description">
          Gain job-ready skills with our comprehensive MEAN stack training in
          Delhi NCR, designed to take you from beginner to advanced levels.
          Curated by industry professionals, this course covers MongoDB,
          Express.js, AngularJS, and Node.js—core technologies used by top tech
          giants. Learn the latest tools and techniques through 50+ live
          projects, gaining real-world experience alongside experienced mentors.
        </p>
        <p className="hero-rating">
          <strong>4.9 out of 5</strong> ratings raised on 5988+ Reviews and
          Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/mean.webp" alt="Student" className="student-image" />
      </div>
    </section>
  );
};

export default Mean;
