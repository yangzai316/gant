import React from "react";
import { TaskItem } from "./task-item";
export const Task = ({ data }) => {
  return (
    <div className="task">
      {data.map((item) => {
        return <TaskItem key={item.id} data={item}></TaskItem>;
      })}
    </div>
  );
};
