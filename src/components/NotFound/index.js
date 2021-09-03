import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import error from 'src/assets/images/PAGE404.png';
import './notFound.scss';

const NotFound = () => (
  <>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <Header />
    <div className="notFound-container">
      <img className="errorimg" src={error} alt="error" />
    </div>
    <Footer />
  </>
);

export default NotFound;
