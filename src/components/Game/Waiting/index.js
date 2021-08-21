// == Import npm
import React from 'react';

// == Import
import './waiting.scss';

// == Composant
const Waiting = () => (
  <>
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
  </>
);

// == Export
export default Waiting;
