import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import clsx from "clsx";

import Hamburger from "./Hamburger";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen p-2 text-gray-200 bg-gradient-to-r from-mainDark-300 to-mainDark-400">
      <div className="container flex flex-row justify-end md:justify-between items-center py-10 px-8 mx-auto">
        <div className="w-full text-center lg:text-left">
          <StaticImage
            src="../images/ChillyCube-white.png"
            alt="ChillyCube - Logo"
            className="w-3/12 lg:w-1/12"
          />
        </div>
        <Hamburger toggleMenu={setIsMenuOpen} />
        {isMenuOpen && (
          <nav
            className={clsx(
              "fixed top-0 left-0 z-50 w-0 min-h-screen py-20 px-10 text-2xl font-bold bg-mainDark-200 rounded-r-lg shadow-md animate-menu"
            )}
          >
            <ul>
              <li>test</li>
              <li>test</li>
            </ul>
          </nav>
        )}
      </div>
      <main className="mt-20">{children}</main>
    </div>
  );
};

export default Layout;
