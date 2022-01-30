import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Hamburegr from "./Hamburger";
import clsx from "clsx";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-mainDark-300 to-mainDark-400 text-gray-200 min-h-screen p-2">
      <div className="container mx-auto px-8 flex flex-row md:justify-between justify-end items-center py-10">
        <div className="w-full lg:text-left text-center">
          <StaticImage
            src="./../images/ChillyCube_white.png"
            alt="ChillyCube - Logo"
            className="w-1/5 lg:w-1/12"
          />
        </div>
        <Hamburegr toggleMenu={setIsMenuOpen} />
        {isMenuOpen && (
          <nav
            className={clsx(
              "fixed left-0 z-50 top-0 w-0 min-h-screen bg-mainDark-200 px-10 py-20 text-2xl font-bold shadow-md rounded-r-lg animate-menu"
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
