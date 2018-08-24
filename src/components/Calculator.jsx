var React = require("react");
const NumericKeys = require('./NumericKeys.jsx');
const NumericOps = require('./NumericOps.jsx');
const ConfirmButton = require('./ConfirmButton.jsx');
const CalculatorDisplay = require('./CalculatorDisplay.jsx');

var Calculator = React.createClass({

  render: function() {
    return (
            <div className="calculator">
                <div className="close" onClick={this.props.close}>
                    <p>X</p>
                </div>
                <div className="calculator-display">
                    <CalculatorDisplay text={this.props.displayValue} />
                </div>
                <div className="calculator-keyboard">
                    <NumericKeys onNumberClick={(number) => {this.props.onChangeDisplay(number)}} />
                    <div className="calculator-right">
                        <ConfirmButton confirmText="OK" onComplete={this.props.onComplete} />
                        <NumericOps onOperationClick={(op) => {this.props.onChangeDisplay(op)} } />
                    </div>
                </div>

            </div>
        );
  }
})

module.exports = Calculator;
