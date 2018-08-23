var React = require("react");
var KeyButton = require("./KeyButton.jsx")

var NumericOps = React.createClass({
  render: function() {

    var keys = []
    var values = ["+","*","-","/"]
    for (var i = 0; i < values.length; i++) {
        keys.push(<KeyButton text={values[i]} onClick={this.props.onOperationClick} />)
    }

    var rows = [], size = 2;

    while (keys.length > 0)
        rows.push(keys.splice(0, size));

    return (
      <div className="numericops">
        <div className="numericops-row">
            {rows[0]}
        </div>

        <div className="numericops-row">
            {rows[1]}
        </div>

      </div>
    )
  }
});

module.exports = NumericOps;
