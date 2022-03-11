import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
    return <h1 onClick={props.onClick} className={props.className}> {props.title} </h1>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Title;
