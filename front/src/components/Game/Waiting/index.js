// == Import npm
import React from 'react';

// == Import
import './waiting.scss';

// == Composant
const Waiting = () => (
  <>
    <div className="waiting-container">
      {/* <h3 className="waiting-title">WAITING ROOM</h3>
      <p className="waiting-text">La partie va bientôt démarrer...</p> */}
      <div className="layer bottom">
        <div className="cube nw" />
        <div className="cube w" />
        <div className="cube n" />
        <div className="cube ne" />
        <div className="cube " />
        <div className="cube sw" />
        <div className="cube s" />
        <div className="cube e" />
        <div className="cube se" />
      </div>
      <div className="layer">
        <div className="cube nw" />
        <div className="cube w" />
        <div className="cube n" />
        <div className="cube ne" />
        <div className="cube " />
        <div className="cube sw" />
        <div className="cube s" />
        <div className="cube e" />
        <div className="cube se" />
      </div>
      <div className="layer top">
        <div className="cube nw" />
        <div className="cube w" />
        <div className="cube n" />
        <div className="cube ne" />
        <div className="cube " />
        <div className="cube sw" />
        <div className="cube s" />
        <div className="cube e" />
        <div className="cube se" />
      </div>
    </div>
  </>
);

// == Export
export default Waiting;
