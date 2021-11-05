import React from "react";
import { TaskItem } from "./task-item";
export const Task = ({ data = [], day }) => {
  return (
    <div className="task-main">
      {data.map((item) => {
        return <TaskItem key={item.id} data={item} day={day}></TaskItem>;
      })}
    </div>
  );
};
export default Task;
