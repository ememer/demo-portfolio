import React from "react";

import clsx from "clsx";
const Content = ({ conteinerCalssName, titleClassName, title, children }) => {
  return (
    <div className={clsx(conteinerCalssName)}>
      <p className="w-full lg:w-2/3 p-4 text-lg font-light ">
        <span
          className={clsx(
            titleClassName,
            "inline-block w-full p-2 text-xl font-bold"
          )}
        >
          {title}
        </span>
        {children}
      </p>
    </div>
  );
};

export default Content;
