import React, { FC, useMemo } from "react";
import "./index.less";
import { useDateInfo, useFormatData } from "./useHooks";
import BgMark from "./components/bg-mark";
import Task from "./components/task";
import Empty from "./components/empty";
import Header from "./components/header";
import Tip from "./components/Tip";
import Legend from "./components/legend";

import { STATE_MAP } from "./const";
export interface DataType {
  title: string;
  id: string | number;
  tasks: any;
}
type positionStatus = "left" | "right";
export type modeStatus = "normal" | "compact";
interface LegendAttrType {
  show: boolean;
  position: positionStatus;
}
interface OrderType {
  well: boolean;
  need: boolean;
}
export interface LegendType {
  legend: LegendAttrType;
  __STATEMAP__: any;
}
export interface GantPropsType {
  data: DataType[];
  year: number;
  month: number;
  legend: LegendAttrType;
  stateMap: any;
  mode: modeStatus;
  order?: OrderType;
  emptyText?: string;
  tipText?: string;
  onTaskClick?: ()=>void;
  onTaskItemClick?: ()=>void;
  showTodaylable?: boolean;
  nowTimeLine?: {
    show: boolean;
    duration: number;
  };
}
const Gant: FC<GantPropsType> = ({
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
      ...stateMap,
    };
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
            __onTaskClick={onTaskClick}
            __onTaskItemClick={onTaskItemClick}
            mode={mode}
          />
          <BgMark
            day={day}
            showTodaylable={showTodaylable}
            nowTimeLine={nowTimeLine}
          ></BgMark>
        </div>
        {!formatList?.length && <Empty emptyText={emptyText}></Empty>}
      </div>
    </div>
  );
};

export default Gant;
