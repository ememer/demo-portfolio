import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

library.add(faArrowLeft, faArrowRight);

const buttonStyle = "p-2 px-3 bg-mainDark-100 rounded-md shadow-md";

const ProjectGallery = ({ data }) => {
  const [lenghtOfPhotoBar, setLenghtOfPhotoBar] = useState();

  const [midPhoto, setMidPhoto] = useState(Math.round(data.length / 2) - 1);

  // useEffect(() => {
  //   let imageBarLenght = document.querySelector("#image-bar").clientWidth;
  //   const progressBarWidth = imageBarLenght / data.length;
  //   setLenghtOfPhotoBar(progressBarWidth);
  //   console.log("lenght", document.querySelector("#image-bar").clientWidth);
  // }, [lenghtOfPhotoBar]);

  return (
    <div>
      <div
        data-sal="zoom-in"
        data-sal-easing="ease-out-cubic"
        data-sal-delay="400"
        data-sal-duration="1500"
        className="relative min-h-30-screen md:min-h-40-screen lg:min-h-60-screen my-10"
      >
        {/* LEFT PHOTO*/}
        <div
          data-sal="zoom-in"
          data-sal-easing="ease-out-cubic"
          data-sal-delay="200"
          data-sal-duration="1500"
          className="absolute top-10 -left-2 z-10 w-1/2 p-1 md:p-2 bg-gradient-to-br from-mainDark-300 to-mainDark-200 rounded-lg shadow-lg"
        >
          <div className="w-full mx-auto rounded-lg">
            <img
              src={
                midPhoto - 1 < 0
                  ? data[data.length - 1]?.img
                  : data[midPhoto - 1]?.img
              }
              alt={
                midPhoto - 1 < 0
                  ? data[data.length - 1]?.imgAlt
                  : data[midPhoto - 1]?.imgAlt
              }
            />
          </div>
        </div>
        {/* MID PHOTO*/}
        <div className="absolute left-1/2 z-20 w-1/2 p-1 md:p-2 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl duration-150 ease-in-out transform hover:scale-110 hover:rotate-1 -translate-x-1/2">
          <div className="w-full mx-auto rounded-lg">
            <img src={data[midPhoto].img} alt={data[midPhoto].imgAlt} />
          </div>
        </div>
        {/* RIGHT PHOTO*/}
        <div
          data-sal="zoom-in"
          data-sal-easing="ease-out-cubic"
          data-sal-delay="600"
          data-sal-duration="1500"
          className="absolute top-10 -right-2 z-10 w-1/2 p-1 md:p-2 bg-gradient-to-bl from-mainDark-300 to-mainDark-200 rounded-lg shadow-lg"
        >
          <div className="w-full mx-auto rounded-lg">
            <img
              src={
                midPhoto + 1 > data.length - 1
                  ? data[0]?.img
                  : data[midPhoto + 1]?.img
              }
              alt={
                midPhoto + 1 > data.length - 1
                  ? data[0]?.imgAlt
                  : data[midPhoto + 1]?.imgAlt
              }
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between items-end w-full md:w-1/2 mx-auto">
        <button
          onClick={() =>
            setMidPhoto((prevState) =>
              prevState === 0 ? data.length - 1 : prevState - 1
            )
          }
          className={clsx(buttonStyle, "rounded-tl-sm rounded-br-sm ")}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />{" "}
        </button>
        <div className="relative w-3/6">
          <span className="block absolute bottom-1 w-24 h-1.5 bg-gray-300 rounded-sm translate-y-1/2"></span>
          <span
            id={"image-bar"}
            className="block absolute bottom-0 w-full h-0.5 bg-gray-300"
          ></span>
        </div>
        <button
          onClick={() =>
            setMidPhoto((prevState) =>
              prevState === data.length - 1 ? 0 : prevState + 1
            )
          }
          className={clsx(buttonStyle, "rounded-tr-sm rounded-bl-sm")}
        >
          {" "}
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectGallery;

ProjectGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
