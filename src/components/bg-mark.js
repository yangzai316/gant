import React from "react";

const BgMark = ({ day }) => {
  return (
    <>
      {new Array(day.total + 1).fill().map((item, index) => {
        return (
          <div
            className="mark-item"
            key={index}
            style={{
              backgroundColor:
                day.today === index ? "rgba(255, 249, 182, 0.3)" : "",
            }}
          >
            <p>{day.today === index ? "今天" : index}</p>
          </div>
        );
      })}
    </>
  );
};

export default BgMark;
