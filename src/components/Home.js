var React = require('react');
var Zipcode = require('./Zipcode');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(location) {
    console.log('Getting weather for: ' + location);
  }

  render() {
    return (
      <div className='home-container'>
        <h1 className='header'>Enter a City and State</h1>
        <Zipcode
          onSubmit={this.getWeather}
        />
      </div>
    )
  }
}


module.exports = Home;
