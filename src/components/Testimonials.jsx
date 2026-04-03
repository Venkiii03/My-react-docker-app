import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials container section-padding" id="about">
      <h2 className="title text-center test-title">
        <span className="pill-green">What</span> our customer<br/>
        says <span className="underline-orange">About Us</span>
      </h2>
      
      <div className="test-canvas">
        <div className="quote-box">
          <p className="quote-text">Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable</p>
        </div>
        
        <div className="t-av av-top-left"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt=""/></div>
        <div className="t-av av-mid-left"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" alt=""/></div>
        <div className="t-av av-large-left"><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" alt=""/></div>
        <div className="t-av av-bottom-left"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt=""/></div>
        
        <div className="t-av av-top-right"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt=""/></div>
        <div className="t-av av-mid-right"><img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100" alt=""/></div>
        <div className="t-av av-large-right"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" alt=""/></div>
      </div>
    </section>
  );
};
export default Testimonials;
