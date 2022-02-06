import React from "react";
import PropTypes from "prop-types";

const Box = ({ className }) => {
  return <div className={className}></div>;
};

export default Box;

Box.porpTypes = {
  className: PropTypes.string.isRequired,
};
