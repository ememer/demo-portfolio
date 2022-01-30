import React from "react";
import clsx from "clsx";
const AkcentBox = ({ className, children }) => {
  return <div className={clsx(className)}>{children}</div>;
};

export default AkcentBox;
