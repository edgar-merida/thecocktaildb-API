import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
    return <img className="card__img" src={props.src} alt={props.alt} onClick={props.onClick}></img>;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default Image;
