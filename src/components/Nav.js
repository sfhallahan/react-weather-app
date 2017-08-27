var React = require('react');
var Zipcode = require('./Zipcode');


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(location) {
    console.log('Getting weather for: ' + location);
  }

  render() {
    return (
      <div className='navbar'>
        <h1 className='siteTitle'>Weather App</h1>
        <Zipcode
          flexDirection='row'
          onSubmit={this.getWeather}
        />
      </div>
    )
  }
}

module.exports = Nav;
