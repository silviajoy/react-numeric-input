const React = require("react");
const Calculator = require('./Calculator.jsx');

const NumericInput = React.createClass({
    
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
        var currentVal = this.state.displayValue
        var newValue = val.toString()

        /* delete */
        if(val==='<') {
            newValue = currentVal.slice(0,-1)
            if(newValue == '') {
                newValue = '0'
            }
            this.setState({displayValue: newValue})
            return
        }

        /* avoid double . insertion */
        if(val==='.' && currentVal.includes(".")){
            return
        }

        /* if it's not the first character or if next value is . */
        if(currentVal != '0' || val == '.') {
            if(currentVal == '') {
                newValue = `0${val}`
            } else {
                newValue = `${currentVal}${val}`;    
            }
        }

        this.setState({displayValue:newValue})
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
