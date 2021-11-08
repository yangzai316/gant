import React from "react";
import TaskItemSub from "./task-item-sub";
import { UIconfig, STATEDICT } from './../const';

export const TaskItem = ({ data }) => {
  return (
    <div className="task" >
      <div className="aside" >{data.title}</div>
      <div
        className="section"
      >
        {(data?.tasks || []).map((item, index) => {
          return (
            <div
              key={item.id}
              className={`task-item ${item.relativeCurrentMonth === "prv" ? "radius-left" : ""
                } ${item.relativeCurrentMonth === "next" ? "radius-right" : ""}`}
              style={{
                marginLeft: `${item.left * 100}px`,
                width: `${item.width * 100}px`,
                backgroundColor: `${STATEDICT[item.state].bgColor}`
              }}
              title={item.title}
            >
              {item.relativeCurrentMonth === "prv" && (
                <span className="icon-point-left">&#10094;</span>
              )}
              <div className="task-content">
                <p>{item.title}</p>
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
    </div>
  );
};
