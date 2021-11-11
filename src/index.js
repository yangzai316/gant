import React, { useMemo } from "react";
import "./index.less";
import { useDateInfo, useFormatData, useFormatCompactData } from "./useHooks";
import BgMark from "./components/bg-mark";
import Task from "./components/task";
import Empty from "./components/empty";
import Header from "./components/header";
import Tip from "./components/Tip";
import Legend from "./components/legend";

import { STATE_MAP } from './const'

const Gant = ({
  data,
  year,
  month,
  emptyText,
  tipText,
  onTaskClick,
  onTaskItemClick,
  legend,
  showTodaylable,
  nowTimeLine,
  stateMap,
  mode,
  order,

}) => {
  // 处理当前时间信息
  const day = useDateInfo(year, month);
  // 格式化数据
  const formatList = useFormatData(data, day, order, mode);
  // 状态配置处理
  const __STATEMAP__ = useMemo(() => {
    return {
      ...STATE_MAP,
      ...stateMap
    }
  }, [stateMap]);

  return (
    <div className="gant-container">
      <Legend legend={legend} __STATEMAP__={__STATEMAP__}></Legend>
      <div className="gant">
        <Tip>{tipText}</Tip>
        <div
          className="main"
          style={{
            width: `${(day.total + 1) * 100}px`,
          }}
        >
          <Header day={day} showTodaylable={showTodaylable}></Header>

          <Task
            __STATEMAP__={__STATEMAP__}
            data={formatList}
            day={day}
            __onTaskClick={onTaskClick}
            __onTaskItemClick={onTaskItemClick}
            mode={mode}
          />
          {!formatList?.length && <Empty emptyText={emptyText}></Empty>}
          <BgMark day={day} showTodaylable={showTodaylable} nowTimeLine={nowTimeLine}></BgMark>
        </div>
      </div>
    </div>
  );
};

export default Gant;
