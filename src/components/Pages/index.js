import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';


import './pages.scss';


const Pages = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Pages;
