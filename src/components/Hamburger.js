import React from "react";

import clsx from "clsx";

const hamburgerClassName = "block bg-gray-300";

const Hamburger = ({ toggleMenu }) => {
  return (
    <div
      onClick={() => toggleMenu((prevState) => !prevState)}
      className="flex flex-col items-end space-y-2 cursor-pointer"
    >
      <span className={clsx(hamburgerClassName, "w-6 lg:w-8 h-0.5")} />
      <span className={clsx(hamburgerClassName, "w-4 lg:w-5 h-0.5 lg:h-1")} />
      <span className={clsx(hamburgerClassName, "w-6 lg:w-8 h-0.5")} />
    </div>
  );
};

export default Hamburger;
