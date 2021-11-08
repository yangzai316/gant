import React from "react";
import TaskItemSub from "./task-item-sub";
import { UI_CONFIG, STATE_DICT } from './../const';

export const TaskItem = ({ data, __onTaskClick, __onTaskItemClick }) => {
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
                marginLeft: `${item.__left * 100}px`,
                width: `${item.__width * 100}px`,
                backgroundColor: `${STATE_DICT[item.state].bgColor}`
              }}
              title={item.title}
              onClick={() => {
                __onTaskClick(item)
              }}
            >
              {item.relativeCurrentMonth === "prv" && (
                <span className="icon-point-left">&#10094;</span>
              )}
              <div className="task-content">
                <p>{item.title}</p>
                <TaskItemSub
                  list={item?.subTasks || []}
                  taskStartTime={item.startTime}
                  __onTaskItemClick={__onTaskItemClick}
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
