import React, { useMemo } from "react";
import { getMonthDays } from "./utils";
/**
 * 处理该月的数据
 * @param {*} year 年
 * @param {*} month 月
 */
export const useDateInfo = (year, month) => {
  return useMemo(() => {
    const now = new Date();
    const today = now.getDate();
    const total = getMonthDays(year, month);
    const currentMonthFirstDay = +new Date(`${year}-${month}-01 00:00:00`);
    const currentMonthLastDay = +new Date(`${year}-${month}-${total} 23:59:59`);
    return {
      total, // 该月一共多少天；
      today, // 今天是几号；
      currentMonthFirstDay, // 该月第一天开始（00:00:00）的时间戳；
      currentMonthLastDay, // 该月最后一天结束（23:59:59）的时间戳；
    };
  }, [year, month]);
};

/**
 * 格式化数据，便于页面渲染
 * @param {*} data 任务数据
 * @param {*} day 该月的时间信息
 */
export const useFormatData = (data = [], day) => {
  return useMemo(() => {
    let list = data.map((item) => {
      let subCount = 0;
      for (const o of item.tasks) {
        subCount += 1;
        o.left = (o.startTime - day.currentMonthFirstDay) / 86400000;
        o.width = (o.endTime - o.startTime) / 86400000;
        //  开始时间边界处理，加标识 relativeCurrentMonth=prv：开始时间早于当月月初
        if (day.currentMonthFirstDay > o.startTime) {
          o.relativeCurrentMonth = "prv";
          o.left = 0;
          o.width = (o.endTime - day.currentMonthFirstDay) / 86400000;
        }
        //  结束时间边界处理，加标识 relativeCurrentMonth=next：结束时间晚于当月月未
        if (day.currentMonthLastDay < o.endTime) {
          o.relativeCurrentMonth = "next";
          o.width = (day.currentMonthLastDay - o.startTime) / 86400000;
        }
      }
      return {
        ...item,
        subCount,
      };
    });
    return {
      list, // 格式化后的数据
    };
  }, [data, day]);
};
