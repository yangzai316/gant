import React, { useMemo } from "react";
import "./index.less";
import { useDateInfo, useFormatData } from "./useHooks";
import { UIconfig } from './const'
import BgMark from "./components/bg-mark";
import Task from "./components/task";
import SideLeft from "./components/side-left";
import Empty from "./components/empty";
import Header from "./components/header";
import Tip from "./components/Tip";

const Gant = ({ data, year, month, emptyText, tipText }) => {
  // 处理当前时间信息
  const day = useDateInfo(year, month);
  // 格式化数据
  const formatList = useFormatData(data, day);
  return (
    <div className="gant">
      <Tip>{tipText}</Tip>
      <div
        className="main"
        style={{
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
