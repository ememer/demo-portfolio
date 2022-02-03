import React from "react";
import PropTypes from "prop-types";

import { StaticImage } from "gatsby-plugin-image";

import clsx from "clsx";

const NotificationBox = ({ className, paragraph, title }) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 p-6 bg-clip-padding bg-opacity-60 rounded-md shadow-xl backdrop-filter",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <StaticImage
          src="../images/Nerd-DFC-13.png"
          alt=""
          placeholder="none"
          className="w-12 h-12 m-4"
        />
      </div>
      <p className="p-2">{paragraph}</p>
    </div>
  );
};

export default NotificationBox;

NotificationBox.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
