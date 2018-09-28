import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './containers/Profile';
import About from './containers/About';
import Admin from './containers/Admin';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}
export default App;
