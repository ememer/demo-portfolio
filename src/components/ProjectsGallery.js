import React from "react";
// import PropTypes from "prop-types";

const ProjectGallery = () => {
  return (
    <div className="relative min-h-60-screen my-10">
      <div className="absolute top-10 left-0 z-10 w-1/2 min-h-40-screen p-2 bg-gray-200 rounded-md shadow-lg">
        <div className="w-full h-3/4 mx-auto border-2 border-red-300 border-solid">
          1
        </div>
      </div>
      <div className="absolute left-1/2 z-20 w-1/2 min-h-50-screen p-2 bg-gray-200 rounded-md shadow-lg -translate-x-1/2">
        <div className="w-full mx-auto border-2 border-red-300 border-solid">
          2
        </div>
      </div>
      <div className="absolute top-10 right-0 z-10 w-1/2 min-h-40-screen p-2 bg-gray-200 rounded-md">
        <div className="w-full mx-auto border-2 border-red-300 border-solid shadow-lg">
          3
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
