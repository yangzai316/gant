import React, { useMemo } from "react";
import "./index.less";
import { getMonthDays } from "./utils";
import BgMark from "./components/bg-mark";
import { Task } from "./components/task";
import { SideLeft } from "./components/side-left";
import { Empty } from "./components/empty";

const Gant = ({ data, emptyText }) => {
  const day = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const today = now.getDay();
    const total = getMonthDays(y, m);
    return {
      total,
      today,
    };
  }, []);
  const formatList = useMemo(() => {
    let subTotalCount = 0;
    let list = data.map((item) => {
      let subCount = 0;
      for (const o of item.tasks) {
        subCount += 1;
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
  }, [data]);
  return (
    <div className="container">
      <div
        className="gant"
        style={{
          height: `${
            formatList.subTotalCount * 40 + formatList?.list?.length - 1 + 40
          }px`,
        }}
      >
        <SideLeft data={formatList.list}></SideLeft>
        <Task data={formatList.list}></Task>
        {!formatList?.list?.length && <Empty emptyText={emptyText}></Empty>}
        <BgMark day={day}></BgMark>
      </div>
    </div>
  );
};

export default Gant;
