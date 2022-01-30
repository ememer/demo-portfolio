import React from "react";
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
          <section>
            <div className="flex flex-col">
              <NotificationBox className="w-full" />
              <p className="text-2xl">Additionally I like motion design too</p>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
