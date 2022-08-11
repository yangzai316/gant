import React, { FC } from "react";
import { TaskItem } from "./task-item";
import { modeStatus } from "./../index";
export interface TaskPropsType {
  data: any;
  __onTaskClick: () => void;
  __onTaskItemClick: () => void;
  __STATEMAP__: any;
  mode: modeStatus;
}

export const Task: FC<TaskPropsType> = ({
  data = [],
  __onTaskClick,
  __onTaskItemClick,
  __STATEMAP__,
  mode,
}) => {
  return (
    <div className="task-main">
      {data.map((item) => {
        return (
          <TaskItem
            __STATEMAP__={__STATEMAP__}
            key={item.id}
            data={item}
            __onTaskClick={__onTaskClick}
            __onTaskItemClick={__onTaskItemClick}
            mode={mode}
          ></TaskItem>
        );
      })}
    </div>
  );
};
export default Task;
