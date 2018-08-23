var React = require("react");

var KeyButton = React.createClass({
  render: function() {

    return (
            <div className="button" role="button" onClick={() => {this.props.onClick(this.props.text)}}> 
                <p>{this.props.text}</p>
            </div>
    )
  }
});

module.exports = KeyButton;
