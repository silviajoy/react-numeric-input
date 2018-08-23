var React = require("react");

var ConfirmButton = React.createClass({
  render: function() {

    return (
      <div className="confirmbutton" role="button" onClick={() => {this.props.onComplete('complete')}}>
        <p>{this.props.confirmText}</p>
      </div>
    )
  }
});

module.exports = ConfirmButton;
