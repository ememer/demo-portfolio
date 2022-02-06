import React, { useState } from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDribbble, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faBullseye,
  faFile,
  faFileCode,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Scroll from "react-scroll";

import { mediaLinks, navigationLinks } from "../shared/utils/navigation";

import Hamburger from "./Hamburger";

const ScrollLink = Scroll.Link;

library.add(
  faGithubAlt,
  faDribbble,
  faAddressCard,
  faFileCode,
  faMarker,
  faFile,
  faBullseye
);

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      onClick={(e) => {
        if (e.target.id !== "hamburger") {
          setIsMenuOpen(false);
        }
      }}
      id="/"
      className="min-h-screen p-2 text-gray-200 bg-gradient-to-r from-mainDark-200 to-mainDark-300"
    >
      <div className="container flex flex-row justify-end md:justify-between items-center py-10 px-8 mx-auto">
        <div className="w-full text-center lg:text-left">
          <StaticImage
            src="../images/ChillyCube-white.png"
            alt="ChillyCube - Logo"
            className="w-3/12 lg:w-1/12"
          />
        </div>
        <Hamburger isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        {isMenuOpen && (
          <nav
            className={clsx(
              "fixed top-0 left-0 z-50 w-0 min-h-screen py-20 px-10 text-2xl font-semibold text-center bg-mainDark-200 rounded-r-lg shadow-md animate-menu"
            )}
          >
            <ul className="grid grid-cols-1 space-y-5">
              <Link className="text-3xl font-bold" to="/">
                HOME
              </Link>
              {navigationLinks.map((nav, index) => (
                <li key={index}>
                  <ScrollLink
                    onClick={() => setIsMenuOpen(false)}
                    to={nav.url}
                    duration={300}
                    delay={500}
                    smooth={true}
                    className="flex justify-center items-center mt-4 md:mt-8 mb-2 md:mb-4 cursor-pointer"
                  >
                    <FontAwesomeIcon className="w-5 mr-3" icon={nav.icon} />
                    {nav.link}
                  </ScrollLink>
                  {nav.projects && (
                    <ScrollLink
                      onClick={() => setIsMenuOpen(false)}
                      to={nav.projects.url}
                      duration={300}
                      delay={500}
                      smooth={true}
                      className="mx-auto font-light cursor-pointer"
                    >
                      <FontAwesomeIcon
                        className="w-3 mr-3"
                        icon={nav.projects.icon}
                      />
                      {nav.projects.link}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="my-20">
              <ul className="grid grid-cols-2 lg:w-1/2 mx-auto">
                {mediaLinks.map((externalLink) => (
                  <a
                    className="px-6 mx-auto text-sm"
                    target="_blank"
                    key={externalLink.link}
                    href={externalLink.url}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="w-full"
                      icon={externalLink?.icon}
                    />
                    {externalLink.link}
                  </a>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
      <main className="mt-20">{children}</main>
    </div>
  );
};

export default Layout;
