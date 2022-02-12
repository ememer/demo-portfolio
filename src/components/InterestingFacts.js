import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

const InterestingFacts = ({
  className,
  paragraph,
  title,
  boxId,
  onSelect,
  image,
}) => {
  return (
    <div
      onClick={() => onSelect(boxId)}
      className={clsx(
        "focus-visible:disabled: grid grid-cols-1 p-6 bg-clip-padding rounded-md shadow-xl backdrop-filter",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img src={image} alt="" placeholder="none" className="w-12 h-12 m-4" />
      </div>
      <p className="p-2">{paragraph}</p>
    </div>
  );
};

export default InterestingFacts;

InterestingFacts.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  boxId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
