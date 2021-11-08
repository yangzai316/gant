import React, { useMemo } from "react";
import { UIconfig } from './../const';
const SideLeft = ({ data = [] }) => {
  return (
    <div className="left-side">
      {data.map((item) => {
        return (
          <div
            className="side-item"
            key={item.id}
            style={{
              height: `${(item.taskCount + item.subTaskCount) * (UIconfig.subTaskItemHight + UIconfig.subTaskItemMarginTop) + item.taskCount * (8 + 4)}px`
            }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default SideLeft;
