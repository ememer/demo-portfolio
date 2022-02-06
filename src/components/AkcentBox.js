import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import sal from "sal.js";
const AkcentBox = ({ className, children }) => {
  sal();
  return (
    <div
      data-sal="slide-right"
      data-sal-duration="800"
      data-sal-delay="300"
      data-sal-easing="ease-in-out-quad"
      className={clsx(className)}
    >
      {children}
    </div>
  );
};

export default AkcentBox;

AkcentBox.propTypes = {
  className: PropTypes.string.isRequired,
};
