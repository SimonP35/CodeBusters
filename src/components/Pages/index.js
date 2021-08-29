import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'src/containers/Home';
import About from 'src/components/About';
import Scenarios from 'src/components/Scenarios';
import LegalNoticeContact from 'src/components/LegalNoticeContact';
import Profil from 'src/containers/Profil';
import Popup from 'src/containers/Popup';
import NotFound from 'src/components/NotFound';
import Game from 'src/containers/Game';

import './pages.scss';

const Pages = () => (
  <>
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
      <Route path="/profil">
        <Profil />
      </Route>
      <Route path="/game/:slug">
        <Game />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Popup />

  </>
);

export default Pages;
