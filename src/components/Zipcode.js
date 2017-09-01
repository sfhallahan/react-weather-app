var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Zipcode extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userInput: ''
      }
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
      var value = event.target.value;
      this.setState(function() {
        return {
          userInput: value
        }
      });
    }

    render() {
      var location = this.state.userInput.replace(/ +/g, "");

      return (
        <div
          className='zipcode-container'
          style={{flexDirection: this.props.flexDirection}}
        >
          <input
            type='text'
            style={{margin: '10px'}}
            className='form-control'
            placeholder='St. George, Utah'
            onChange={this.handleChange}
          />
          <Link
            to={{
              pathname: 'forecast',
              search: '?location=' + location
            }}
            className='btn btn-success'
          >
            Get Weather
          </Link>
        </div>
      )
  }
}

Zipcode.propTypes = {
  flexDirection: PropTypes.string.isRequired,
}

Zipcode.defaultProps = {
  flexDirection: 'column'
}

module.exports = Zipcode;
