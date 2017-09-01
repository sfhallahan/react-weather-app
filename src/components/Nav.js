var React = require('react');
var Zipcode = require('./Zipcode');
var Link = require('react-router-dom').Link;


function Nav (props) {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1 className='siteTitle'>Weather App</h1>
      </Link>
      <Zipcode
        flexDirection='row'
      />
    </div>
  )
}

module.exports = Nav;
