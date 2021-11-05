import React from "react";
export const TaskItem = ({ data }) => {
  return (
    <div
      className="sub-task"
      style={{
        height: `${data.subCount * 40}px`,
      }}
    >
      {data.tasks.map((item, index) => {
        return (
          <div
            key={item.id}
            className="sub-task-item"
            style={{
              left: `${((item.startTime - 1635696000000) / 86400000) * 100}px`,
              top: `${index * 40}px`,
              width: `${
                ((item.endTime - item.startTime) / 86400000) * 100 - 1
              }px`,
            }}
            title={item.title}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
