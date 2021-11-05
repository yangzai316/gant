import React from "react";

const BgMark = ({ day }) => {
  return (
    <div className="bg-mark">
      {new Array(day.total + 1).fill().map((item, index) => {
        return (
          <div
            className="bg-mark-item"
            key={index}
            style={{
              backgroundColor: day.today === index ? "#FDFCE5" : "",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BgMark;