import React from 'react';
import './ProgressSection.css';

const ProgressSection = ({ reversed, titleContent, description, shape, imgUrl }) => {
  return (
    <section className="progress-section section-padding container" style={{position: 'relative'}}>
      <div className={`progress-flex ${reversed ? 'reversed' : ''}`}>
        <div className="progress-text">
          <h2 className="title">
            {titleContent}
          </h2>
          <p className="subtitle">{description}</p>
          <div className="read-more-wrapper">
            <span className="read-more-text">Read more</span>
            <div className="long-arrow-ext"></div>
          </div>
        </div>
        <div className="progress-visual">
          <div className={`geo-shape ${shape}`}></div>
          <div className="img-circle">
            <img src={imgUrl} alt="Progress" />
          </div>
        </div>
      </div>
      {!reversed && (
         <svg className="progress-connector" width="100%" height="200" style={{position: 'absolute', bottom: '-150px', left: 0, pointerEvents: 'none', zIndex: -1}}>
            <path d="M800 0 Q400 200 100 80" stroke="#FF5C5C" strokeWidth="3" fill="none" />
         </svg>
      )}
    </section>
  );
};
export default ProgressSection;
