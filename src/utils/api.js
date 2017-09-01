var axios = require('axios');

var key = '&APPID=4a3636e5c4e926aa5f1a3a16048a839d'


function getCurrentWeather(location) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + key)
    .then( function (weather) {
      return weather.data;
    });
}

function getFiveDayForecast(location) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + location + key)
  .then( function (weather) {
    return weather.data;
  });
}

function handleError (error) {
  console.warn(error);
  return null;
}

module.exports = {
  getWeather: function (location) {
    return axios.all([
      getCurrentWeather(location),
      getFiveDayForecast(location)
    ]).then( function(data) {
      var currentWeather = data[0];
      var forecast = data[1];
      return {
        currentWeather: currentWeather,
        forecast: forecast
      }
    }).catch(handleError);
  }
}
