import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const NotificationBox = () => {
  return (
    <div className="bg-red-400 rounded-md grid grid-cols-1 w-2/4">
      <div className="text-right w-full">
        <StaticImage
          src="../images/Nerd-DFC-13.png"
          alt=""
          placeholder="none"
          className="w-12 h-12 m-4"
        />
      </div>
      <p className="p-4">
        Cupcake ipsum dolor sit amet. Macaroon wafer halvah marshmallow carrot
        cake ice cream gingerbread danish ice cream. Sweet roll gummies wafer
        candy brownie dessert marshmallow. Jelly-o powder biscuit cotton candy
        danish gummies halvah.
      </p>
    </div>
  );
};

export default NotificationBox;
