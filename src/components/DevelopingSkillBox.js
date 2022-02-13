import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

const DesignSkillBox = ({
  title,
  image,
  tech,
  feauture,
  imgAlt,
  imgClassName,
}) => {
  console.log(feauture);
  return (
    <div className="grid grid-cols-2 gap-5 items-center w-full py-16 px-6 my-10 bg-mainDark-300 rounded-md shadow-lg">
      <div
        className={clsx(
          "flex justify-center items-center w-32 h-32 mx-auto rounded-full rounded-tr-none",
          imgClassName
        )}
      >
        <img className="w-20 h-20" src={image} alt={imgAlt} />
      </div>
      <div className="flex flex-col items-center w-full mx-auto">
        <h2 className="my-2 text-2xl font-semibold">{title}</h2>
        <ul>
          {tech &&
            tech.map((techItem, index) => (
              <li className="my-3" key={index}>
                {techItem.tech}
              </li>
            ))}
        </ul>
        {feauture && (
          <div className="ml-5">
            <h2 className="my-2 text-xl font-semibold">Planed</h2>
            <ul>
              {feauture.map((feautureItem, index) => (
                <li className="my-3 ml-2" key={index}>
                  {feautureItem.tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignSkillBox;

DesignSkillBox.propType = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  feauture: PropTypes.array,
  imgAlt: PropTypes.string.isRequired,
  imgClassName: PropTypes.string,
};
