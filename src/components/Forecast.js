var React = require("react");
var queryString = require("query-string");
var DayItem = require("./DayItem");
var api = require("../utils/api");

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentWeather: null,
      forecast: null,
      error: "",
      detailedView: false,
      detailedDate: ""
    };
    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDetailed = this.renderDetailed.bind(this);
    this.renderFiveDay = this.renderFiveDay.bind(this);
  }

  componentDidMount() {
    var location = queryString.parse(this.props.location.search).location;
    this.makeRequest(location);
  }

  componentWillReceiveProps(nextProps) {
    var location = queryString.parse(nextProps.location.search).location;
    this.makeRequest(location);
  }

  makeRequest(location) {
    this.setState(() => {
      return {
        loading: true,
        detailedView: false,
        detailedDate: "",
        error: ""
      };
    });
    api
      .getWeather(location)
      .then(data => {
        if (data === null) {
          this.setState(() => {
            return {
              error: "There was an error retriving the forecast. Please Try again.",
              loading: false
            };
          });
        } else {
          this.setState(() => {
            return {
              currentWeather: data.currentWeather,
              forecast: data.forecast,
              loading: false,
              error: ""
            };
          });
        }
      })
      .catch(error => {
        this.setState(() => {
          return {
            error: "There was an error retriving the forecast. Please Try again.",
            loading: false
          };
        });
      });
  }

  handleClick(date) {
    var clickedDate = "";
    if (date !== null) {
      clickedDate = date;
    }
    this.setState(function() {
      return {
        detailedDate: clickedDate,
        detailedView: !this.state.detailedView
      };
    });
  }

  renderDetailed() {
    var forecast = this.state.forecast.list;
    var detailedWeatherArray = forecast.filter(
      function(dayItem) {
        return dayItem.dt_txt === this.state.detailedDate;
      }.bind(this)
    );
    var detailedWeather = detailedWeatherArray[0];
    return (
      <div>
        <h1 className="forecast-header">{detailedWeather.name}</h1>
        <DayItem
          key={detailedWeather.dt_txt}
          dt={detailedWeather.dt_txt}
          weather={detailedWeather.weather[0]}
          detailed={detailedWeather.main}
          widgetSize="large"
        />
        <div className="smallDayContainer">
          <button className="btn btn-success" onClick={this.handleClick}>
            Return to 5 Day Forecast
          </button>
        </div>
      </div>
    );
  }

  renderFiveDay() {
    var forecast = this.state.forecast;
    var loading = this.state.loading;
    var currentWeather = this.state.currentWeather;

    return (
      <div>
        {loading ? (
          <p> Loading </p>
        ) : (
          <div>
            <h1 className="forecast-header">{currentWeather.name}</h1>
            <DayItem
              key={currentWeather.dt_txt}
              dt={""}
              weather={currentWeather.weather[0]}
              detailed={currentWeather.main}
              widgetSize="large"
            />

            <div className="forecast-container">
              {forecast.list
                .filter(function(futureWeather) {
                  return futureWeather.dt_txt.includes("12:00:00");
                })
                .map(
                  function(futureWeather) {
                    return (
                      <DayItem
                        key={futureWeather.dt_txt}
                        dt={futureWeather.dt_txt}
                        weather={futureWeather.weather[0]}
                        detailed={futureWeather.main}
                        widgetSize="small"
                        onClick={this.handleClick}
                      />
                    );
                  }.bind(this)
                )}
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    var detailedView = this.state.detailedView;
    if (this.state.error.length > 0) {
      return (
        <div>
          <h1 className="forecast-header">{this.state.error}</h1>
        </div>
      );
    }
    return <div>{detailedView ? this.renderDetailed() : this.renderFiveDay()}</div>;
  }
}

module.exports = Forecast;
