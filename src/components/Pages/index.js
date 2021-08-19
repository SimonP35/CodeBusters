import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Scenarios from 'src/components/Scenarios';

import NotFound from 'src/components/NotFound';

import './pages.scss';

const Pages = () => (
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
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Pages;
