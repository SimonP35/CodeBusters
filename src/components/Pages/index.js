import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import About from 'src/components/About';
// import Profil from 'src/components/Profil';
import Scenarios from 'src/components/Scenarios';
import LegalNoticeContact from 'src/components/LegalNoticeContact';
import NotFound from 'src/components/NotFound';

import './pages.scss';

const Pages = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/scenarios">
        <Scenarios />
      </Route>
      <Route path="/LegalNoticeContact">
        <LegalNoticeContact />
      </Route>
      <Route path="/Profil">
        {/* <Profil /> */}
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default Pages;
