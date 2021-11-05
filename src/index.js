import React, { useMemo } from "react";
import "./index.less";
import { useDateInfo, useFormatData } from "./useHooks";
import BgMark from "./components/bg-mark";
import Task from "./components/task";
import SideLeft from "./components/side-left";
import Empty from "./components/empty";
import Header from "./components/header";
import Tip from "./components/Tip";

const Gant = ({ data, year, month, emptyText }) => {
  // 处理当前
  const day = useDateInfo(year, month);
  const formatList = useFormatData(data, day);
  return (
    <div className="gant">
      <Tip></Tip>
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
  );
};

export default Gant;
