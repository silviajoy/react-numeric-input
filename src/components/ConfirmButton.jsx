const React = require("react");

const ConfirmButton = ({onComplete, confirmText}) => {

    return (
      <div className="confirmbutton" role="button" onClick={() => {onComplete('complete')}}>
        <p>{confirmText}</p>
      </div>
    )
}

module.exports = ConfirmButton;
