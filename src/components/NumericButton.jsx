var React = require("react");

var NumericKeys = React.createClass({
  render: function() {

    return (
            <div className="numerickeys-button"> 
                <p>{this.props.text}</p>
            </div>
    )
  }
});

module.exports = NumericKeys;
