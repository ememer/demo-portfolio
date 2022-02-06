import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import sal from "sal.js";

const SkillBox = ({ className, image, title, skill }) => {
  sal();
  return (
    <div
      data-sal="slide-right"
      data-sal-easing="ease-in-expo"
      className={clsx(
        "grid grid-cols-2 gap-2 p-6 my-5 bg-clip-padding hover:bg-gradient-to-r rounded-md shadow-xl backdrop-filter duration-300 transform md:hover:scale-105",
        className
      )}
    >
      <div className="flex justify-center items-center w-full">
        <img src={image} alt="" placeholder="none" className="w-14 h-14" />
      </div>
      <div className="w-full text-center">
        <h2 className="w-full min-h-24 p-4">{title}</h2>
        <span className="mr-5 font-light">Skill:</span>
        <span className="mr-5 font-light">{skill}</span>
      </div>
    </div>
  );
};

export default SkillBox;

SkillBox.propTypse = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};
