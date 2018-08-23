var React = require('react');
var ReactDOM = require("react-dom");
var NumericInput = require("./components/NumericInput.jsx");

ReactDOM.render(<NumericInput id="myinput" label="number" name="quantity"/>, document.getElementById("input"));
