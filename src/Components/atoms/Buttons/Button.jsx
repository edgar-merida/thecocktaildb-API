import React from "react";
import PropTypes from "prop-types";

require("./Button.css");

const Button = (props) => {
    return (
    <button onClick={props.e} className="a__button">{props.text}</button>
    )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    e: PropTypes.func.isRequired,
};

export default Button;
