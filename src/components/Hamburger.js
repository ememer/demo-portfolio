import React from "react";

const Hamburegr = ({ toggleMenu }) => {
  return (
    <div
      onClick={() => toggleMenu((prevState) => !prevState)}
      class="space-y-2 flex flex-col items-end cursor-pointer"
    >
      <span class="block w-6 lg:w-8 h-0.5 bg-gray-300"></span>
      <span class="block w-4 h-0.5 lg:w-5 lg:h-1 bg-gray-300"></span>
      <span class="block w-6 lg:w-8 h-0.5 bg-gray-300"></span>
    </div>
  );
};

export default Hamburegr;
