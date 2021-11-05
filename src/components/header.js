import React from "react";

const Header = ({ day }) => {
  return (
    <div className="header">
      {new Array(day.total + 1).fill().map((item, index) => {
        return (
          <p
            key={index}
            style={{
              backgroundColor: day.today === index ? "#FDFCE5" : "",
            }}
          >
            {day.today === index ? "今天" : index}
          </p>
        );
      })}
    </div>
  );
};

export default Header;
