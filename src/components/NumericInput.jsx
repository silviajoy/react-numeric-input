var React = require("react");
const Calculator = require('./Calculator.jsx');

var NumericInput = React.createClass({
    
    getInitialState() {
        return {
            className: "dnone",
            inputValue: 0,
        };
    },

    onFocus() {
        this.setState({className:"dflex"})
    },

    onComplete(text) {
        var total = eval(text)
        this.setState({className:"dnone", inputValue:total})  
    },

    render: function() {

        return (
            <div className="numericinput">
                <input id={this.props.id} type="text" name={this.props.name} onFocus={ this.onFocus } value={this.state.inputValue} />
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className={ "calculator-wrapper " + this.state.className }>
                    <Calculator onComplete={ this.onComplete } />
                </div>
                <h1> aaaaaaaaaaaaaaaaaa </h1>
            </div>
        );
    }
})

module.exports = NumericInput;
