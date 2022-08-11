import React from 'react';
import TaskNormalItem from "./task-normal-item";


const TaskCompactItem = ({ tasks, __onTaskClick, __onTaskItemClick, __STATEMAP__ }) => {
    return <>
        {
            tasks.map((item, index) => {
                return <div key={index.toString()} style={{
                    display: 'flex',
                    alignItems: 'start'
                }}>
                    <TaskNormalItem tasks={item || []} __onTaskClick={__onTaskClick} __onTaskItemClick={__onTaskItemClick} __STATEMAP__={__STATEMAP__}></TaskNormalItem>
                </div>
            })
        }
    </>
};
export default TaskCompactItem;