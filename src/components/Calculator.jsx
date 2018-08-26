const React = require("react");
const NumericKeys = require('./NumericKeys.jsx');
const NumericOps = require('./NumericOps.jsx');
const ConfirmButton = require('./ConfirmButton.jsx');
const CalculatorDisplay = require('./CalculatorDisplay.jsx');

const Calculator = ({close, displayValue, onChangeDisplay, onComplete}) => {
    console.log(displayValue)
    return (
            <div className="calculator">
                <div className="close" onClick={close}>
                    <p>X</p>
                </div>
                <div className="calculator-display">
                    <CalculatorDisplay text={displayValue} />
                </div>
                <div className="calculator-keyboard">
                    <NumericKeys onNumberClick={(number) => {onChangeDisplay(number)}} leftKey="." rightKey="<" />
                    <div className="calculator-right">
                        <ConfirmButton confirmText="OK" onComplete={onComplete} />
                        <NumericOps onOperationClick={(op) => {onChangeDisplay(op)} } />
                    </div>
                </div>

            </div>
        );
  }

module.exports = Calculator;
