var React = require("react");
const NumericInput = require('./NumericInput.jsx');
const NumericOps = require('./NumericOps.jsx');
const ConfirmButton = require('./ConfirmButton.jsx');
const CalculatorDisplay = require('./CalculatorDisplay.jsx');

var Form = React.createClass({

  render: function() {
    return (
            <div className="form">
                <form>
                    <input type="text" id="name" />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="surname" />
                    <label htmlFor="surname">Surname</label>
                    <NumericInput id="myinput" label="Age" name="age"/>
                    <input type="text" id="country" />
                    <label htmlFor="name">Country</label>
                    <input type="date" id="name" />
                    <label htmlFor="name">Date</label>
                </form>
            </div>
        );
  }
})

module.exports = Form;
