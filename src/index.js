import React, { useMemo } from "react";
import "./index.less";
import { getMonthDays } from "./utils";
import BgMark from "./components/bg-mark";
import Task from "./components/task";
import SideLeft from "./components/side-left";
import Empty from "./components/empty";
import Header from "./components/header";
import Tip from "./components/Tip";

const Gant = ({ data, year, month, emptyText }) => {
  // 处理当前
  const day = useMemo(() => {
    const now = new Date();
    const today = now.getDay();
    const total = getMonthDays(year, month);
    const currentMonthFirstDay = +new Date(`${year}-${month}-01 00:00:00`);
    console.log(total);
    return {
      total,
      today,
      currentMonthFirstDay,
    };
  }, [year, month]);
  const formatList = useMemo(() => {
    let subTotalCount = 0;
    let list = data.map((item) => {
      let subCount = 0;
      for (const o of item.tasks) {
        subCount += 1;
        day.currentMonthFirstDay > o.startTime &&
          (o.sliceStartTime = day.currentMonthFirstDay);
      }
      subTotalCount += subCount;
      return {
        ...item,
        subCount,
      };
    });
    return {
      subTotalCount,
      list,
    };
  }, [data, day]);
  return (
    <div className="gant">
      <Tip></Tip>
      <div className="container">
        <div
          className="main"
          style={{
            height: `${
              formatList.subTotalCount * 40 + formatList?.list?.length - 1 + 40
            }px`,
            width: `${(day.total + 1) * 100}px`,
          }}
        >
          <Header day={day}></Header>
          <SideLeft data={formatList.list}></SideLeft>
          <Task data={formatList.list} day={day}></Task>
          {!formatList?.list?.length && <Empty emptyText={emptyText}></Empty>}
          <BgMark day={day}></BgMark>
        </div>
      </div>
    </div>
  );
};

export default Gant;
