import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './notFound.scss';

const NotFound = () => (
  <>
    <Header />
    <div className="notFound-container">
      <p>404</p>
    </div>
    <Footer />
  </>
);

export default NotFound;
