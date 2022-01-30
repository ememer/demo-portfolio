import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const NotificationBox = ({ className }) => {
  return (
    <div
      className={clsx(
        "rounded-md grid grid-cols-1  bg-clip-padding bg-opacity-60 shadow-xl backdrop-filter  p-6",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Notification Box</h2>
        <StaticImage
          src="../images/Nerd-DFC-13.png"
          alt=""
          placeholder="none"
          className="w-12 h-12 m-4"
        />
      </div>
      <p className="p-2">
        Cupcake ipsum dolor sit amet. Macaroon wafer halvah marshmallow carrot
        cake ice cream gingerbread danish ice cream. Sweet roll gummies wafer
        candy brownie dessert marshmallow. Jelly-o powder biscuit cotton candy
        danish gummies halvah.
      </p>
    </div>
  );
};

export default NotificationBox;
