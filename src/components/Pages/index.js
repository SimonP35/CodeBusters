import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'src/components/Home';
import './pages.scss';

const Pages = () => (
  <Route path="/" exact>
    <Home />
  </Route>
);

export default Pages;
