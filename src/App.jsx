import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressSection from './components/ProgressSection';
import Offerings from './components/Offerings';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { useScrollReveal } from './hooks/useScrollReveal';

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <div className="reveal">
          <Hero />
        </div>
        
        <div className="reveal reveal-left">
          <ProgressSection 
            reversed={false}
            titleContent={<><span className="underline-orange">Tomorrow</span> should<br/>be better than <span className="pill-green">today</span></>}
            description="We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
            shape="red-square"
            imgUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500"
          />
        </div>
        
        <div className="reveal reveal-right">
          <ProgressSection 
            reversed={true}
            titleContent={<><span className="pill-green">See</span> how we can<br/>help you <span className="underline-orange">progress</span></>}
            description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
            shape="red-triangle"
            imgUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
          />
        </div>
        
        <div className="reveal reveal-left">
          <Offerings />
        </div>

        <Projects />
        
        <div className="reveal reveal-right">
          <Testimonials />
        </div>
      </main>
      <div className="reveal">
        <Footer />
      </div>
    </>
  );
};
export default App;
