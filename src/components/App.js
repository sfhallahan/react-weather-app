import React, { Component } from 'react';
var Nav = require('./Nav');
var Home = require('./Home');
var NotFound = require('./NotFound');
var Forecast = require('./Forecast');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
