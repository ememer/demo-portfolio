import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

const hamburgerClassName =
  "block bg-gray-300 transition translate-x-0 duration-150";

const Hamburger = ({ isMenuOpen, toggleMenu }) => {
  const barsClasses = {
    top: "-rotate-45",
    mid: "invisible",
    bottom: "rotate-45",
  };

  return (
    <div
      id="hamburger"
      onClick={() => toggleMenu((prevState) => !prevState)}
      className="flex fixed right-10 lg:right-40 flex-col items-end space-y-2 cursor-pointer"
    >
      <span
        id="hamburger"
        className={clsx(
          hamburgerClassName,
          isMenuOpen && barsClasses.top,
          "w-7 lg:w-8 h-0.5 "
        )}
      />
      <span
        id="hamburger"
        className={clsx(
          hamburgerClassName,
          isMenuOpen && barsClasses.mid,
          "w-4 lg:w-5 h-0.5 lg:h-1"
        )}
      />
      <span
        id="hamburger"
        className={clsx(
          hamburgerClassName,
          isMenuOpen && barsClasses.bottom,
          "w-7 lg:w-8 h-0.5"
        )}
      />
    </div>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
