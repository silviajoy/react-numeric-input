var React = require("react");
var NumericButton = require("./NumericButton.jsx")

var NumericKeys = React.createClass({
  render: function() {

    return (
      <div className="numerickeys">
        <div className="numerickeys-row">
            <NumericButton text="1"/>
            <NumericButton text="2"/>
            <NumericButton text="3"/>
        </div>

        <div className="numerickeys-row">
            <NumericButton text="4"/>
            <NumericButton text="5"/>
            <NumericButton text="6"/>
        </div>

        <div className="numerickeys-row">
            <NumericButton text="7"/>
            <NumericButton text="8"/>
            <NumericButton text="9"/>
        </div>

        <div className="numerickeys-row">
            <NumericButton text=""/>
            <NumericButton text="0"/>
            <NumericButton text=","/>
        </div>

      </div>
    )
  }
});

module.exports = NumericKeys;
