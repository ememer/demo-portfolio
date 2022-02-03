import React from "react";

const Hamburger = ({ toggleMenu }) => {
  return (
    <div
      onClick={() => toggleMenu((prevState) => !prevState)}
      className="flex flex-col items-end space-y-2 cursor-pointer"
    >
      <span className="block w-6 lg:w-8 h-0.5 bg-gray-300"></span>
      <span className="block w-4 lg:w-5 h-0.5 lg:h-1 bg-gray-300"></span>
      <span className="block w-6 lg:w-8 h-0.5 bg-gray-300"></span>
    </div>
  );
};

export default Hamburger;
