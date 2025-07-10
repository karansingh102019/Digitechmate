import React from "react";
import "../styles/HeroSection.css";

const MernStack = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="tagline">
          #1 Professional MERN Stack Developer Training Institute in Delhi NCR
        </p>
        <h1 className="hero-heading">
          Master <span> MERN Stack Development </span> with Placement Guarantee
        </h1>
        <p className="hero-Para">
          Learn the Best MERN Full Stack Developer Skills in India
        </p>
        <p className="hero-description">
          Upskill your career faster with trending AI & web development
          technologies! Our professionalMERN stack developer course offers
          zero-to-pro-level training in modern web development using MongoDB,
          Express.js, React, and Node.js. Now upgraded with insights on Agentic
          AI workflows—a rising trend in AI where Large Language Models (LLMs)
          like Google Gemini, ChatGPT, and open-source frameworks are used to
          create autonomous, goal-driven agents. Learn how to integrate
          intelligent agent patterns into web apps and stay ahead in the
          evolving tech landscape. Gain hands-on experience through
          project-based learning, build real-world applications, and grow your
          portfolio with cutting-edge AI + web technologies.
        </p>
        <p className="hero-rating">
          <strong>4.8 out of 5</strong> ratings raised on 5909+ Reviews and
          Votes.
        </p>

        <div className="cta-buttons">
          <button className="btn green">Live chat with Specialist</button>
          <button className="btn orange">Schedule Your Consultation</button>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="/mern-full-stack.webp"
          alt="Student"
          className="student-image"
        />
      </div>
    </section>
  );
};

export default MernStack;
