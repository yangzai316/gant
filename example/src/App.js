import React from "react";
import Gant from "gant";
import { data } from "./data";
const __STATEMAP = {
  waiting: {
    bgColor: '#C6D57E',
    label: '等待'
  },
  primary: {
    bgColor: '#A2D2FF',
    label: '正常'
  },
  success: {
    bgColor: '#61B15A',
    label: '成功'
  },
  warning: {
    bgColor: '#FFC93C',
    label: '警告'
  },
  error: {
    bgColor: '#FA1E0E',
    label: '异常'
  },
  closed: {
    bgColor: '#DDDDDD',
    label: '关闭'
  },
  subTask: {
    bgColor: '#7868e6',
    label: '子任务'
  },
};
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
          show: true,
          position: 'left'
        }}
        showTodaylable={true}
        nowTimeLine={{
          show: true,
          duration: 60000
        }}
        stateMap={__STATEMAP}
      ></Gant>
    </div>
  );
};

export default App;
