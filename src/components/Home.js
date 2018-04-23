var React = require("react");
var Zipcode = require("./Zipcode");

function Home(props) {
  return (
    <div className="home-container">
      <h1 className="header">Enter a City</h1>
      <Zipcode />
    </div>
  );
}

module.exports = Home;
