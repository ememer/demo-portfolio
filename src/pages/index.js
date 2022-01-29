import React from "react";
import Layout from "../components/Layout";

import NotificationBox from "../components/NotificationBox";

const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Layout>
        <NotificationBox />
      </Layout>
    </div>
  );
};

export default Index;
