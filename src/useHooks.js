import React, { useMemo } from "react";
import { getMonthDays, formatTrack, sortData } from "./utils";
/**
 * 处理该月的数据
 * @param {*} year 年
 * @param {*} month 月
 */
export const useDateInfo = (year, month) => {
  return useMemo(() => {
    const now = new Date();
    const today = now.getDate();
    const toHours = now.getHours();
    const toMinutes = now.getMinutes();
    const total = getMonthDays(year, month);
    const currentMonthFirstDay = +new Date(`${year}-${month}-01 00:00:00`);
    const currentMonthFirstWeek = new Date(`${year}-${month}-01 00:00:00`).getDay();
    const currentMonthLastDay = +new Date(`${year}-${month}-${total} 23:59:59`);
    return {
      total, // 该月一共多少天；
      currentMonthFirstWeek,// 该月第一天是周几
      today, // 今天是几号；
      toHours: toHours > 9 ? toHours : `0${toHours}`,// 当前的小时值；
      toMinutes: toMinutes > 9 ? toMinutes : `0${toMinutes}`,// 当前的分钟值
      currentMonthFirstDay, // 该月第一天开始（00:00:00）的时间戳；
      currentMonthLastDay, // 该月最后一天结束（23:59:59）的时间戳；
      now,// 当前时间戳

    };
  }, [year, month]);
};

/**
 * 格式化数据，便于页面渲染
 * @param {*} data 任务数据
 * @param {*} day 该月的时间信息
 */


export const useFormatData = (data = [], day, order, mode) => {
  return useMemo(() => {
    const _ = JSON.parse(JSON.stringify(data));

    if (mode === 'normal') {
      return _.map((item) => {
        (!order?.well && order?.need) && (item.tasks = sortData(item.tasks)); // 无序&需要排序，则进行排序处理
        console.log(item.tasks);
        for (const o of item.tasks) {
          o.__left = (o.startTime - day.currentMonthFirstDay) / 86400000;
          o.__width = (o.endTime - o.startTime) / 86400000;
          //  开始时间边界处理，加标识 relativeCurrentMonth=prv：开始时间早于当月月初
          if (day.currentMonthFirstDay > o.startTime) {
            o.relativeCurrentMonth = "prv";
            o.__left = 0;
            o.__width = (o.endTime - day.currentMonthFirstDay) / 86400000;
          }
          //  结束时间边界处理，加标识 relativeCurrentMonth=next：结束时间晚于当月月未
          if (day.currentMonthLastDay < o.endTime) {
            o.relativeCurrentMonth = "next";
            o.__width = (day.currentMonthLastDay - o.startTime) / 86400000;
          };
        }
        return item
      });
    } else {
      return _.map(item => {
        (!order?.well && order?.need) && (item.tasks = sortData(item.tasks)); // 无序&需要排序，则进行排序处理
        item.tasks = formatTrack(item.tasks, day);// 数据紧凑式格式化
        return item;
      });
    }
  }, [data, day, order, mode])
};