import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Notes/Home';
import Features from '../Notes/Features';

export default () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/features' component={Features} />
  </Switch>
)

