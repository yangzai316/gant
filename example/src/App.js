import React from "react";
import Gant from "gant";
import { data } from "./data";

const App = () => {
  return (
    <div style={{ height: "600px" }}>
      <Gant data={data} year={2021} month={11} emptyText="没有数据啦..."></Gant>
    </div>
  );
};

export default App;
