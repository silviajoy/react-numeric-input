var React = require("react");
const NumericKeys = require('./NumericKeys.jsx');
const NumericOps = require('./NumericOps.jsx');

var Calculator = React.createClass({
  render: function() {
    return (
            <div className="calculator">
                <div className="calculator-keys">
                    <NumericKeys />
                </div>
                <div className="calculator-operations">
                    <NumericOps />
                </div>
            </div>
        );
  }
})

module.exports = Calculator;
