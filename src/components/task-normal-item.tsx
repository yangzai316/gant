import React, { FC } from "react";
import TaskItemSub from "./task-item-sub";
export interface TaskNormalItemPropsType {
    tasks: any;
  __onTaskClick: (item:any) => void;
  __onTaskItemClick: (item:any) => void;
  __STATEMAP__: any;
}
const TaskNormalItem: FC<TaskNormalItemPropsType> = ({
  tasks,
  __onTaskClick,
  __onTaskItemClick,
  __STATEMAP__,
}) => {
  return (
    <>
      {tasks.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`task-item ${
              item.relativeCurrentMonth === "prv" ? "radius-left" : ""
            } ${item.relativeCurrentMonth === "next" ? "radius-right" : ""}`}
            style={{
              marginLeft: `${item.__left * 100}px`,
              width: `${item.__width * 100}px`,
              backgroundColor: `${__STATEMAP__[item.state]?.bgColor}`,
            }}
            title={item.title}
            onClick={() => {
              __onTaskClick && __onTaskClick(item);
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
    </>
  );
};

export default TaskNormalItem;
