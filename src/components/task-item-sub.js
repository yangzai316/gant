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
              marginLeft: `${((item.startTime - taskStartTime) / 86400000) * 100}px`,
              width: `${((item.endTime - item.startTime) / 86400000) * 100}px`,
            }}
            title={item.title}
          >{item.title}</p>
        );
      })}
    </>
  );
};
export default TaskItemSub;
