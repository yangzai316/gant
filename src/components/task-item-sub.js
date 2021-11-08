import React from "react";

const TaskItemSub = ({ list = [], taskStartTime }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <p
            className="sub-task-item"
            key={item.id}
            style={{
              top: `${index * 10 + 20 + index * 2}px`,
              left: `${((item.startTime - taskStartTime) / 86400000) * 100}px`,
              width: `${((item.endTime - item.startTime) / 86400000) * 100}px`,
            }}
          >123123</p>
        );
      })}
    </>
  );
};
export default TaskItemSub;
