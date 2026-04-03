import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="hero-content text-center">
        <h1 className="hero-title">
          The <span className="underline-orange">thinkers and</span><br/>
          doers were <span className="pill-pink">changing</span><br/>
          the <span className="pill-green">status Quo</span> with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers. Together,<br/>
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      <div className="hero-visuals">
        <svg className="hero-svg-left" width="120" viewBox="0 0 100 200" fill="none">
          <path d="M0 20 Q50 20 50 60 T0 100 Q50 100 50 140 T0 180" stroke="#FF5C5C" strokeWidth="4" fill="none"/>
          <path d="M10 20 Q60 20 60 60 T10 100 Q60 100 60 140 T10 180" stroke="#000" strokeWidth="4" fill="none"/>
        </svg>
        <div className="hero-purple-semi"></div>
        
        <div className="av-wrapper av-left-1"><img src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=150&q=80" alt=""/></div>
        <div className="av-wrapper av-left-2"><img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80" alt=""/></div>
        <div className="av-wrapper av-center"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" alt=""/></div>
        <div className="av-wrapper av-right-1"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt=""/></div>
        <div className="av-wrapper av-right-2"><img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80" alt=""/></div>
      </div>
    </section>
  );
};
export default Hero;
