import React from "react";
import AkcentBox from "../components/AkcentBox";
import Layout from "../components/Layout";

import NotificationBox from "../components/NotificationBox";

const Index = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <section className="flex flex-col px-4 py-10 md:px-10 items-center md:items-start w-full min-h-screen text-2xl lg:text-5xl font-light">
            <div className="h-full space-y-2 lg:space-y-2">
              <h1 className="font-bold text-5xl lg:text-8xl">
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
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <AkcentBox className="relative w-full min-h-50-screen border-solid border-2 border-red-200">
                <NotificationBox className="bg-mainDark-900 w-full lg:w-2/5 z-30 absolute top-0 -right-0 scale-75" />
                <NotificationBox className="bg-mainDark-900 w-full lg:w-2/5 z-20 absolute top-0 -right-0 scale-75 backdrop-blur-sm" />
                <NotificationBox className="bg-mainDark-900 w-full lg:w-2/5 z-10 absolute top-0 -right-0 scale-75 backdrop-blur-sm" />
              </AkcentBox>
              <p className="text-4xl w-full mx-auto my-5">
                Additionally I like motion design too
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
