import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faLink,
  faMobileAlt,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

library.add(faGithubAlt, faMobileAlt, faPlay, faLink, faXmark, faCheck);
const ProjectCard = ({
  title,
  mobileSupport,
  imgUrl,
  gitUrl,
  gitAlt,
  demoUrl,
  demoAlt,
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 w-full min-h-80-screen p-6 bg-clip-padding bg-mainDark-300 rounded-md shadow-xl backdrop-filter">
      <div className="flex items-center min-h-30-screen">
        <img className=" mx-auto rounded-md" alt="" src={imgUrl} />
      </div>

      <h2 className="w-full h-1/6 p-6 text-3xl font-bold text-center">
        {title}
      </h2>
      <table className="h-2/6">
        <thead>
          <tr>
            <th className="w-2/6 text-center">
              <div className="flex flex-col">
                <FontAwesomeIcon className="mb-2" icon={faGithubAlt} />
                Github
              </div>
            </th>
            <th className="w-2/6 text-center">
              <div className="flex flex-col">
                <FontAwesomeIcon className="mb-2" icon={faMobileAlt} />
                Mobile
              </div>
            </th>
            <th className="w-2/6 text-center">
              <div className="flex flex-col">
                <FontAwesomeIcon className="mb-2" icon={faPlay} />
                Demo
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={clsx("py-4 text-center", gitUrl && "cursor-pointer")}
            >
              {gitUrl && (
                <a alt={gitAlt} target="_blank" href={gitUrl} rel="noreferrer">
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              {!gitUrl && (
                <FontAwesomeIcon className="text-red-400" icon={faXmark} />
              )}
            </td>
            <td className="py-4 text-center">
              {mobileSupport && (
                <FontAwesomeIcon className="text-green-300" icon={faCheck} />
              )}
              {!mobileSupport && (
                <FontAwesomeIcon className="text-red-400" icon={faXmark} />
              )}
            </td>
            <td className="py-4 text-center cursor-pointer">
              <a alt={demoAlt} target="_blank" href={demoUrl} rel="noreferrer">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectCard;
