import React from "react";
export const TaskItem = ({ data, day }) => {
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
              top: `${index * 40}px`,
              left: `${item.left * 100}px`,
              width: `${item.width * 100 - 1}px`,
            }}
            title={item.title}
          >
            {item.relativeCurrentMonth === "prv" && (
              <span className="icon-point-left">&#10094;</span>
            )}
            <span className="content">{item.title}</span>
            {item.relativeCurrentMonth === "next" && (
              <span className="icon-point-right">&#10095;</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
