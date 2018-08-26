var React = require("react");
var KeyButton = require("./KeyButton.jsx")

var NumericKeys = React.createClass({
  render: function() {

    var leftKey = "."
    var rightKey = "<"

    var keys = []
    var values = [1,2,3,4,5,6,7,8,9,leftKey,0,rightKey]
    for (var i = 0; i < values.length; i++) {
        keys.push(<KeyButton text={values[i]} onClick={this.props.onNumberClick} />)
    }

    var rows = [], size = 3;

    while (keys.length > 0)
        rows.push(keys.splice(0, size));

    return (
      <div className="numerickeys">
        <div className="numerickeys-row">
            {rows[0]}
        </div>

        <div className="numerickeys-row">
            {rows[1]}
        </div>

        <div className="numerickeys-row">
            {rows[2]}
        </div>

        <div className="numerickeys-row">
            {rows[3]}
        </div>

      </div>
    )
  }
});

module.exports = NumericKeys;
