var React = require("react");
var PropTypes = require("prop-types");
var Link = require("react-router-dom").Link;

class Zipcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        userInput: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.link);
    this.link.click();
  }

  render() {
    var location = this.state.userInput.replace(/ +/g, "%20");

    return (
      <form
        onSubmit={this.handleSubmit}
        className="zipcode-container"
        style={{ flexDirection: this.props.flexDirection }}
      >
        <input
          type="text"
          style={{ margin: "10px" }}
          className="form-control"
          placeholder="Washington"
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: "forecast",
            search: "?location=" + location
          }}
        >
          <button className="btn btn-success" ref={c => (this.link = c)}>
            Get Weather
          </button>
        </Link>
      </form>
    );
  }
}

Zipcode.propTypes = {
  flexDirection: PropTypes.string.isRequired
};

Zipcode.defaultProps = {
  flexDirection: "column"
};

module.exports = Zipcode;
