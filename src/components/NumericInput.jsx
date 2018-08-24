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

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    },

    onBlur() {
        setTimeout(() => {
            var active = document.activeElement
            if(!active.classList.contains("calculator-wrapper") || active.id == this.props.id) {
                this.setState({className:"dnone"})
        }
        }, 1);

    },

    render: function() {

        return (
            <div className="numericinput">
                <input id={this.props.id} type="number" name={this.props.name} onFocus={ this.onFocus } value={this.state.inputValue} onChange={this.handleChange} onBlur={this.onBlur} />
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className={ "calculator-wrapper " + this.state.className } tabIndex="-1">
                    <Calculator onComplete={ this.onComplete } />
                </div>
                <h1> aaaaaaaaaaaaaaaaaa </h1>
            </div>
        );
    }
})

module.exports = NumericInput;
