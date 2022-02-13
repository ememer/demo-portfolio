import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

library.add(faArrowLeft, faArrowRight);

const buttonStyle = "p-2 px-3 bg-mainDark-100 rounded-md shadow-md";

const ProjectGallery = ({ data, onClick, isClicked }) => {
  const [
    barWidthDivatedByCurrentElementWidt,
    setBarWidthDivatedByCurrentElementWidt,
  ] = useState(null);
  const [currentBarStyle, setCurrentBarStyle] = useState(null);
  const [midPhoto, setMidPhoto] = useState(Math.round(data?.length / 2) - 1);

  useEffect(() => {
    let barWidth = document.querySelector("#image-bar")?.clientWidth;
    let barWidthByGalleryElement = barWidth / data.length;
    setBarWidthDivatedByCurrentElementWidt(barWidthByGalleryElement);
    if (currentBarStyle === null) {
      setCurrentBarStyle({
        width: barWidthByGalleryElement,
        left: 0,
      });
    }
  }, []);

  function nextItem() {
    setMidPhoto((prevState) =>
      prevState === data.length - 1 ? 0 : prevState + 1
    );
    setCurrentBarStyle({
      ...currentBarStyle,
      left: currentBarStyle.width * midPhoto,
    });
  }

  function prevItem() {
    setMidPhoto((prevState) =>
      prevState === 0 ? data.length - 1 : prevState - 1
    );
    setCurrentBarStyle((prevState) => {
      return {
        ...currentBarStyle,
        left:
          midPhoto === 1
            ? currentBarStyle.width * (data.length - 1)
            : prevState.left - barWidthDivatedByCurrentElementWidt,
      };
    });
  }

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
          className="flex absolute top-10 -left-2 z-10 items-center w-1/2 h-3/4 md:h-3/5 lg:h-4/5 p-1 md:p-2 bg-gradient-to-br from-mainDark-300 to-mainDark-200 rounded-lg shadow-lg"
        >
          <div className="w-full mx-auto rounded-lg">
            <img
              className="rounded-md"
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
        <div
          onClick={() => {
            if (isClicked) {
              return;
            } else {
              onClick(true);
              setTimeout(() => {
                onClick(false);
              }, 5500);
            }
          }}
          className="flex absolute left-1/2 z-20 items-center w-1/2 h-3/4 md:h-3/5 lg:h-4/5 p-1 md:p-2 rounded-lg shadow-lg hover:shadow-xl duration-150 ease-in-out transform hover:scale-110 hover:rotate-1 -translate-x-1/2"
        >
          <div className="w-full mx-auto rounded-lg">
            <img
              className="rounded-md"
              src={data[midPhoto].img}
              alt={data[midPhoto].imgAlt}
            />
          </div>
        </div>
        {/* RIGHT PHOTO*/}
        <div
          data-sal="zoom-in"
          data-sal-easing="ease-out-cubic"
          data-sal-delay="600"
          data-sal-duration="1500"
          className="flex absolute top-10 -right-2 z-10 items-center w-1/2 h-3/4 md:h-3/5 lg:h-4/5 p-1 md:p-2 bg-gradient-to-bl from-mainDark-300 to-mainDark-200 rounded-lg shadow-lg"
        >
          <div className="w-full mx-auto rounded-lg">
            <img
              className="rounded-md"
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
          onClick={() => prevItem()}
          className={clsx(buttonStyle, "rounded-tl-sm rounded-br-sm ")}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />{" "}
        </button>
        <div className="relative w-3/6">
          <span
            style={currentBarStyle}
            className="block absolute bottom-1 h-1.5 bg-gray-300 rounded-sm duration-200 ease-in-out transform translate-y-1/2"
          ></span>
          <span
            id={"image-bar"}
            className="block absolute bottom-0 w-full h-0.5 bg-gray-300"
          ></span>
        </div>
        <button
          onClick={() => nextItem()}
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
  onClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};
