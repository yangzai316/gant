import React from "react";
import { TaskItem } from "./task-item";
export const Task = ({ data = [], day, __onTaskClick, __onTaskItemClick, __STATEMAP__, mode }) => {
  return (
    <div className="task-main">
      {data.map((item) => {
        return <TaskItem __STATEMAP__={__STATEMAP__} key={item.id} data={item} day={day} __onTaskClick={__onTaskClick} __onTaskItemClick={__onTaskItemClick}
          mode={mode}></TaskItem>;
      })}
    </div>
  );
};
export default Task;
