import React from "react";
export const Tip = ({ children }) => {
  return <div className="tip">{children || "姓名/日期"}</div>;
};
export default Tip;
