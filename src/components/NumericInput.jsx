var React = require("react");
const Calculator = require('./Calculator.jsx');

var NumericInput = React.createClass({
    
    getInitialState() {
        return {
            className: "dnone",
            inputValue: "",
            displayValue: "0",
        };
    },

    onFocus() {
        this.setState({className:"dflex"})
    },

    onComplete() {
        var total = eval(this.state.displayValue)
        this.setState({className:"dnone", inputValue:total})  
    },

    onChangeDisplay(val) {
        if(val==='<') {
            this.setState({displayValue: this.state.displayValue.slice(0,-1)});
            return
        }

        var newValue = val

        if(this.state.displayValue != '0' || val == '.') {
            // newValue = this.state.displayValue + '' + val
            newValue = `${this.state.displayValue}${val}`;
            console.log(newValue)
        }

        this.setState({displayValue:newValue})
        setTimeout(() => {console.log(this.state.displayValue)}, 100)
    },

    handleChange(event) {
        this.setState({inputValue: event.target.value, displayValue: event.target.value});
    },

    onBlur() {
        setTimeout(() => {
            var active = document.activeElement
            if(!active.classList.contains("calculator-wrapper") || active.id == this.props.id) {
                this.setState({className:"dnone"})
        }
        }, 1);

    },

    onClose() {
        this.setState({className:"dnone"})
    },

    render: function() {

        return (
            <div className="numericinput">
                <input id={this.props.id} type="number" name={this.props.name} onFocus={ this.onFocus } value={this.state.inputValue} onChange={this.handleChange} onBlur={this.onBlur} />
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className={ "calculator-wrapper " + this.state.className } tabIndex="-1">
                    <Calculator onComplete={ this.onComplete } displayValue={this.state.displayValue} onChangeDisplay={this.onChangeDisplay} close={this.onClose} />
                </div>
            </div>
        );
    }
})

module.exports = NumericInput;
