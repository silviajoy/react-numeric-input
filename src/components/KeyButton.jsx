var React = require("react");

var KeyButton = ({onClick, text}) => {

    return (
            <div className="button" role="button" onClick={() => {onClick(text)}}> 
                <p>{text}</p>
            </div>
    )
}

module.exports = KeyButton;
