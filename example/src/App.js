import React from "react";
import Gant from "gant";
import { data } from "./data";

const App = () => {
  return (
    <div style={{ height: "600px" }}>
      <Gant
        data={data}
        year={2021}
        month={11}
        emptyText="没有数据啦..."
        onTaskClick={(data) => {
          console.log('任务被点击：', data);
        }}
        onTaskItemClick={(data) => {
          console.log('子任务被点击：', data);
        }}
        legend={{
          position: 'right'
        }}
        showTodaylable={true}
        nowTimeLine={{
          show: true,
          duration: 1000
        }}
      ></Gant>
    </div>
  );
};

export default App;
