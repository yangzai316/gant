import React from "react";
import TaskNormalItem from "./task-normal-item";
import TaskCompactItem from './task-compact-item';


export const TaskItem = ({ data, __onTaskClick, __onTaskItemClick, __STATEMAP__, mode }) => {
  return (
    <div className="task" >
      <div className="aside" >{data.title}</div>
      <div
        className="section"
      >{
          mode === "normal" ?
            <TaskNormalItem tasks={data?.tasks || []} __onTaskClick={__onTaskClick} __onTaskItemClick={__onTaskItemClick} __STATEMAP__={__STATEMAP__}></TaskNormalItem>
            : <TaskCompactItem tasks={data?.tasks || []} __onTaskClick={__onTaskClick} __onTaskItemClick={__onTaskItemClick} __STATEMAP__={__STATEMAP__}></TaskCompactItem>

        }

      </div>
    </div>
  );
};
