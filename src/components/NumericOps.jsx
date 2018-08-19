var React = require("react");
var NumericButton = require("./NumericButton.jsx")

var NumericOps = React.createClass({
  render: function() {

    return (
      <div className="numericops">
        <div className="numericops-row">
            <NumericButton text="+"/>
            <NumericButton text="*"/>
        </div>

        <div className="numericops-row">
            <NumericButton text="-"/>
            <NumericButton text="/"/>
        </div>

        <div className="numericops-lastrow">
            <NumericButton text="="/>
        </div>

      </div>
    )
  }
});

module.exports = NumericOps;
