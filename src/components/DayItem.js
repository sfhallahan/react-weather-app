var React = require('react');
var converter = require('../utils/converter');
var PropTypes = require('prop-types');

var largeWidgetStyles = {
  container: 'largeDayContainer',
  weather: 'largeDayWeather',
  subheader: 'largeDaySubheader'
}

var smallWidgetStyles = {
  container: 'smallDayContainer',
  weather: 'smallDayWeather',
  subheader: 'smallDaySubheader'
}



class DayItem extends React.Component {
  constructor(props) {
    super(props);
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('CLicked with date' + this.props.dt);
    this.props.onClick(this.props.dt);
  }

  render() {
    var widgetSize = this.props.widgetSize;
    var icon = this.props.weather.icon;
    var styling = {};
    var largeWidget = false;
    if (widgetSize === 'large') {
      styling = largeWidgetStyles;
      largeWidget=true;
    } else {
      styling = smallWidgetStyles;
    }
    return (
      <div className={styling['container']}
            onClick={this.handleClick}>
        <img
          className={styling['weather']}
          src={'./images/weather-icons/' + icon + '.svg'}
          alt={this.props.weather.description}
           />
        {largeWidget
        ? <div className='detailsContainer'>
            <h3 className={styling['subheader']}>{this.props.dt && converter.dateFormatter(this.props.dt)}</h3>
            <h2 className={styling['subheader']}>{this.props.weather.main}</h2>
            <h3 className='weatherDetails'>Temp: {converter.tempFormatter(this.props.detailed.temp)} &deg;F</h3>
            <h3 className='weatherDetails'>High temp: {converter.tempFormatter(this.props.detailed.temp_max)} &deg;F</h3>
            <h3 className='weatherDetails'>Low temp: {converter.tempFormatter(this.props.detailed.temp_min)} &deg;F</h3>
            <h3 className='weatherDetails'>Humidity: {this.props.detailed.humidity}% </h3>
          </div>
        : <h3 className={styling['subheader']}>{converter.dateFormatter(this.props.dt)}</h3>
        }
      </div>
    )
  }
}

DayItem.defaultProps = {
  onClick: function() {
    return null;
  },
}


module.exports = DayItem;
