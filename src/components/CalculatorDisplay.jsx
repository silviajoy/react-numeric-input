const React = require("react");

const CalculatorDisplay = ({text}) => {
    return (
      <div className="display">
        <p>{text}</p>
      </div>
    )
};

module.exports = CalculatorDisplay;
