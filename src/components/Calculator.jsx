var React = require("react");
const NumericKeys = require('./NumericKeys.jsx');
const NumericOps = require('./NumericOps.jsx');
const ConfirmButton = require('./ConfirmButton.jsx');
const CalculatorDisplay = require('./CalculatorDisplay.jsx');

var Calculator = React.createClass({
   getInitialState() {
        return {
            currentValue: 0,
            displayValue: 0
        };
    },

    onKeyPressed(key) {
        if(key==='<') {

            this.setState({displayValue: this.state.displayValue.slice(0,-1)});
            return
        }

        var newValue = key

        if(this.state.displayValue != '0' || key == '.') {
            newValue = this.state.displayValue + '' + key
        }

        this.setState({displayValue:newValue})
    },

  render: function() {
    return (
            <div className="calculator">
                <div className="calculator-display">
                    <CalculatorDisplay text={this.state.displayValue} />
                </div>
                <div className="calculator-keyboard">
                    <NumericKeys onNumberClick={(number) => {this.onKeyPressed(number)}} />
                    <div className="calculator-right">
                        <ConfirmButton confirmText="OK" onComplete={() => {this.props.onComplete(this.state.displayValue)}} />
                        <NumericOps onOperationClick={(op) => {this.onKeyPressed(op)} } />
                    </div>
                </div>

            </div>
        );
  }
})

module.exports = Calculator;
