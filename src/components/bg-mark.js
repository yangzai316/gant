import React, { useEffect, useState } from "react";

const BgMark = ({ day, showTodaylable = true, nowTimeLine }) => {
  // 定时器，修改时间线位置
  const [nowTime, setNowTime] = useState(new Date());
  useEffect(() => {
    let timer = null;
    if (nowTimeLine.show) {
      timer = setInterval(function () {
        setNowTime(new Date());
      }, nowTimeLine.duration > 60000 ? nowTimeLine.duration : 60000);
    }

    return () => {
      clearInterval(timer)
    }
  }, [nowTimeLine])
  return (
    <div className="bg-mark">
      {new Array(day.total + 1).fill().map((item, index) => {
        return (
          <div
            className="bg-mark-item"
            key={index}
            style={{
              backgroundColor: showTodaylable && day.today === index ? "#FDFCE5" : "",
            }}
          ></div>
        );
      })}
      {nowTimeLine.show && <p
        className="now-line"
        style={{ left: `${(nowTime - day.currentMonthFirstDay) / 86400000 * 100 + 100}px` }}
        data-time={`${nowTime.getHours()}:${nowTime.getMinutes()}`}
      ></p>}
    </div>
  );
};

export default BgMark;
