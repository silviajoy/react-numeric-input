var React = require("react");

var CalculatorDisplay = React.createClass({
  render: function() {

    return (
      <div className="display">
        <p>{this.props.text}</p>
      </div>
    )
  }
});

module.exports = CalculatorDisplay;
