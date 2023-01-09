import React from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";

const Home = () => {
  return (
    <div
      className="pb-80"
      style={{
        background: `url("https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png")`,
      }}
    >
      <Form />
      <Table />
    </div>
  );
};

export default Home;
