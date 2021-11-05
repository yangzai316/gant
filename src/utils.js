/**
 * 获取当前月一共多少天
 */

export const getMonthDays = (year, month) =>
  new Date(year, month + 1, 0).getDate();

/**
 *
 */
