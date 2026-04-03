import React from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn clickable" onClick={onClose}>&times;</button>
        <h2><span className="underline-orange">Let's talk</span></h2>
        <p>Ready to start your next project? Drop us a line.</p>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us about your project" required></textarea>
          <button type="submit" className="submit-btn clickable">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
