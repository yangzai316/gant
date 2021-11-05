import React from "react";
export const TaskItem = ({ data, day }) => {
  return (
    <div
      className="sub-task"
      style={{
        height: `${data.subCount * 40}px`,
      }}
    >
      {data.tasks.map((item, index) => {
        return (
          <div
            key={item.id}
            className="sub-task-item"
            style={{
              left: `${
                item.sliceStartTime
                  ? 0
                  : ((item.startTime - day.currentMonthFirstDay) / 86400000) *
                    100
              }px`,
              top: `${index * 40}px`,
              width: `${
                item.sliceStartTime
                  ? ((item.endTime - item.sliceStartTime) / 86400000) * 100 - 1
                  : ((item.endTime - item.startTime) / 86400000) * 100 - 1
              }px`,
            }}
            title={item.title}
          >
            {item.sliceStartTime && (
              <span className="icon-point">&#10094;</span>
            )}
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
