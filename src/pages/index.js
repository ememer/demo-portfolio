import React from "react";

import AkcentBox from "../components/AkcentBox";
import Layout from "../components/Layout";
import NotificationBox from "../components/NotificationBox";

const Index = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <section className="flex flex-col items-center md:items-start w-full min-h-screen py-10 px-4 md:px-10 text-2xl lg:text-5xl font-light">
            <div className="h-full space-y-2 lg:space-y-2">
              <h1 className="text-5xl lg:text-8xl font-bold">
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
                <NotificationBox className="absolute top-0 lg:top-1/3 right-0 lg:right-1/2 z-30 w-full lg:w-3/5 bg-mainDark-900 animate-mobileSlideRight lg:animate-slideUp scale-75 lg:scale-none" />
                <NotificationBox className="absolute top-0 lg:top-1/3 right-0 lg:right-1/2 z-20 w-full lg:w-3/5 bg-mainDark-900 backdrop-blur-sm animate-mobileSlideDownLeft lg:animate-slideUpRight scale-75 lg:scale-none" />
                <NotificationBox className="absolute top-0 lg:top-1/3 right-0 lg:right-1/2 z-10 w-full lg:w-3/5 bg-mainDark-900 backdrop-blur-sm animate-mobileSlideLeft lg:animate-slideRight scale-75 lg:scale-none" />
              </AkcentBox>
              <h2 className="w-full my-5 mx-auto text-4xl">
                Additionally I like motion design too
              </h2>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
