import React from "react";
import Gant from "gant";
import { data } from "./data";

const App = () => {
  return (
    <div style={{ height: "300px", width: "600px", overflow: "auto" }}>
      <Gant data={data} emptyText="没有数据啦..."></Gant>
    </div>
  );
};

export default App;
