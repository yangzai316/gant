import React from "react";
import TaskItemSub from "./task-item-sub";

export const TaskItem = ({ data }) => {
  return (
    <div
      className="task"
      style={{
        height: `${data.subCount * 70}px`,
      }}
    >
      {(data?.tasks || []).map((item, index) => {
        return (
          <div
            key={item.id}
            className={`task-item ${
              item.relativeCurrentMonth === "prv" ? "radius-left" : ""
            } ${item.relativeCurrentMonth === "next" ? "radius-right" : ""}`}
            style={{
              top: `${index * 70}px`,
              left: `${item.left * 100}px`,
              width: `${item.width * 100}px`,
            }}
            title={item.title}
          >
            {item.relativeCurrentMonth === "prv" && (
              <span className="icon-point-left">&#10094;</span>
            )}
            <div className="task-content">
              <p className="sub-task-title">{item.title}</p>
              <TaskItemSub
                list={item?.subTasks || []}
                taskStartTime={item.startTime}
              ></TaskItemSub>
            </div>
            {item.relativeCurrentMonth === "next" && (
              <span className="icon-point-right">&#10095;</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
