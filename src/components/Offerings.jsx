import React from 'react';
import './Offerings.css';

const Offerings = () => {
  return (
    <section className="offerings container section-padding">
      <h2 className="title text-center offers-title">
        What we <span className="pill-green">can</span><br/>
        <span className="underline-orange">offer you!</span>
      </h2>
      
      <div className="offerings-list">
        <div className="offer-item">
          <div className="offer-desc">Office of multiple<br/>interest content</div>
          <div className="offer-title">Colaborative & partnership</div>
          <div className="offer-arrow">→</div>
        </div>
        <div className="offer-item">
          <div className="offer-desc">The hanger US Air force<br/>digital experimental</div>
          <div className="offer-title">We talk about our weight</div>
          <div className="offer-arrow">→</div>
        </div>
        <div className="offer-item" style={{position: 'relative'}}>
          <div className="offer-desc">Delta faucet content,<br/>social, digital</div>
          <div className="offer-title">
            Piloting digital confidence
            <div className="offer-blob"></div>
          </div>
          <div className="offer-arrow">→</div>
        </div>
      </div>
    </section>
  );
};
export default Offerings;
