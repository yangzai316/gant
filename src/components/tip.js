import React from "react";
export const Tip = ({ tipText }) => {
  return <div className="tip">{tipText || "姓名/日期"}</div>;
};
export default Tip;
