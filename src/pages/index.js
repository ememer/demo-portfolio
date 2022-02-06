import React, { useState } from "react";

import clsx from "clsx";
import sal from "sal.js";

import AkcentBox from "../components/AkcentBox";
import Layout from "../components/Layout";
import NotificationBox from "../components/NotificationBox";
import SkillBox from "../components/skillBox";
import { designList } from "../shared/utils/design";
import { notificationBoxes } from "../shared/utils/NotificationBoxes";

const notificationBoxClassName =
  "absolute top-0 lg:top-1/3 right-0 lg:right-2/2 w-full lg:w-3/4 bg-mainDark-200 scale-75 lg:scale-none cursor-pointer";

const Index = () => {
  const [currentSelectedAkcentIndex, setCurrentSelectedAkcentIndex] =
    useState(null);
  sal();
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <section className="flex flex-col items-center md:items-start w-full min-h-70-screen py-10 px-4 md:px-10 text-2xl lg:text-5xl font-light">
            <div className="h-full space-y-2 lg:space-y-2">
              <h1 className="text-5xl lg:text-8xl font-bold ">
                Hi<span className="font-medium">!</span>
              </h1>
              <h2>My name is Michał.</h2>
              <p>
                {" "}
                I'm interesting in{" "}
                <span className="font-medium">JS Developing</span>
                <span className="text-blue-300"> &</span>{" "}
                <span className="font-medium">UI Designing.</span>
              </p>
            </div>
          </section>
          <section className="py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <AkcentBox className="relative w-full min-h-50-screen">
                {notificationBoxes.map((box, index) => (
                  <NotificationBox
                    onSelect={setCurrentSelectedAkcentIndex}
                    image={box.imageSrc}
                    boxId={index}
                    key={box.id}
                    paragraph={box.paragraph}
                    title={box.title}
                    className={clsx(
                      notificationBoxClassName,
                      currentSelectedAkcentIndex === index
                        ? box.shuffle
                        : box.className
                    )}
                  />
                ))}
              </AkcentBox>
              <h2
                data-sal="flip-up"
                data-sal-duration="1000"
                data-sal-easing="ease-in-out-quad"
                className="inline-block w-full px-2 my-5 text-3xl lg:text-4xl"
              >
                Additionally I like motion design too
                <span className="inline-block w-full text-sm font-light animate-pulse">
                  {" "}
                  Click on each boxes 🤤
                </span>
              </h2>
            </div>
          </section>
          <section className="py-20">
            <div className="w-full">
              <h2 id="design" className="my-5 text-5xl font-bold text-center">
                Design
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-10">
                <div className="grid order-2 grid-cols-1 md:grid-cols-2 gap-2 w-full">
                  {designList.map((design) => (
                    <SkillBox
                      key={design.design}
                      image={design.icon}
                      title={design.design}
                      skill={design.level}
                      className={design.colors}
                    />
                  ))}
                </div>
                <div className="flex order-1 justify-around items-center">
                  <p className="w-full lg:w-2/3 p-4 text-lg font-light ">
                    <span className="inline-block w-full p-2 text-xl font-bold text-left">
                      Started with MS Paint
                    </span>
                    Couple years ago like a kid i was started creating things in
                    MS Paint and some guy said "Hey this is PhotoShop try it!".
                    Then i jon to world of design
                    <span className="font-semibold">
                      {" "}
                      and now working with...
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2
                id="projects"
                className="w-full py-6 text-4xl font-semibold text-center"
              >
                Projects
              </h2>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
