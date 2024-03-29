import React, { useMemo, useState, FC, ReactNode } from "react";
import Gant from "gant";

import { data } from "./data";

const __STATEMAP = {
  waiting: {
    bgColor: "#C6D57E",
    label: "等待",
  },
  primary: {
    bgColor: "#A2D2FF",
    label: "正常",
  },
  success: {
    bgColor: "#61B15A",
    label: "成功",
  },
  warning: {
    bgColor: "#FFC93C",
    label: "警告",
  },
  error: {
    bgColor: "#FA1E0E",
    label: "异常",
  },
  closed: {
    bgColor: "#DDDDDD",
    label: "关闭",
  },
  subTask: {
    bgColor: "#7868e6",
    label: "子任务",
  },
};
const App: FC<ReactNode> = () => {
  const [type, setType] = useState<"normal" | "compact">("normal");
  return (
    <div style={{ height: "600px" }}>
      <button
        onClick={() => {
          setType("normal");
        }}
      >
        常规
      </button>
      <button
        onClick={() => {
          setType("compact");
        }}
      >
        紧凑
      </button>
      :{type}
      <Gant
        data={data}
        year={2022}
        month={8}
        emptyText="没有数据啦..."
        legend={{
          show: true,
          position: "left",
        }}
        showTodaylable={true}
        nowTimeLine={{
          show: true,
          duration: 60000,
        }}
        stateMap={__STATEMAP}
        mode={type}
        order={{
          well: false,
          need: true,
        }}
      ></Gant>
    </div>
  );
};

export default App;
