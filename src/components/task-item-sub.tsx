import React from "react";

const TaskItemSub = ({ list = [], taskStartTime, __onTaskItemClick }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <p
            className="sub-task-item"
            key={item.id}
            style={{
              marginLeft: `${
                ((item.startTime - taskStartTime) / 86400000) * 100
              }px`,
              width: `${((item.endTime - item.startTime) / 86400000) * 100}px`,
            }}
            title={item.title}
            onClick={(e) => {
              if (!__onTaskItemClick) return;
              e.stopPropagation();
              __onTaskItemClick(item);
            }}
          >
            {item.title}
          </p>
        );
      })}
    </>
  );
};
export default TaskItemSub;
