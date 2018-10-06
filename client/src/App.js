import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Callback from './Components/Auth/Callback'
import MainLayout from './Components/Auth/MainLayout'

export default () => (
  <Switch>
    <Route path='/callback' render={() => (
      <Callback />
    )} />
    <Route path='/' render={() => (
      <MainLayout />
    )} />
  </Switch>
);
