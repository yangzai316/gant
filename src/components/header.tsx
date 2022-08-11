import React, { FC } from "react";
import { WEEK_MAP } from "./../const";
import { UseDateInfoType } from "./../useHooks";

interface HeaderPropsType {
  day: UseDateInfoType;
  showTodaylable: boolean;
}

const Header: FC<HeaderPropsType> = ({ day, showTodaylable = true }) => {
  return (
    <div className="header">
      {new Array(day.total + 1).fill("").map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor:
                showTodaylable && day.today === index ? "#FDFCE5" : "",
            }}
          >
            <p>{showTodaylable && day.today === index ? "今天" : index}</p>
            <p> {WEEK_MAP[(day.currentMonthFirstWeek + index - 1) % 7]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
