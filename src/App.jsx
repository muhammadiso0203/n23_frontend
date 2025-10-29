import React, { memo, useState } from "react";
import Form from "./components/form";
import Card from "./components/card";

const App = () => {
  const [data, setData] = React.useState([]);

  return (
    <div>
      <Form setData={setData} />
      {data.map((item) => (
        <Card setData={setData} key={item.id} title={item.title} id={item.id} />
      ))}
    </div>
  );
};

export default memo(App);
