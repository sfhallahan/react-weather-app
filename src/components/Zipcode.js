var React = require('react');
var PropTypes = require('prop-types');

class Zipcode extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userInput: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
      var value = event.target.value;
      this.setState(function() {
        return {
          userInput: value
        }
      });
    }

    handleSubmit() {
      this.props.onSubmit(this.state.userInput);
    }

    render() {
    return (
      <div className='zipcode-container' style={{flexDirection: this.props.flexDirection}}>
        <input
          type='text'
          style={{margin: '10px'}}
          className='form-control'
          placeholder='St. George, Utah'
          onChange={this.handleChange}
        />
        <button
          className='btn btn-success'
          onClick={this.handleSubmit}
        >
          Get Weather
        </button>
      </div>
    )
  }
}

Zipcode.propTypes = {
  flexDirection: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
}

Zipcode.defaultProps = {
  flexDirection: 'column'
}


module.exports = Zipcode;
