import React, { Component } from 'react';
var Nav = require('./Nav');
var Home = require('./Home');

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
