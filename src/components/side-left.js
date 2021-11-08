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
            style={{ height: `${item.subCount * (UIconfig.taskItemHeight + UIconfig.taskItemMarginTop) + UIconfig.taskItemMarginTop}px` }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default SideLeft;
