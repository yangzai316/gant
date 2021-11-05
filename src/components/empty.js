import React from "react";

const Empty = ({ emptyText }) => {
  return <div className="no-data">{emptyText || "暂无数据"}</div>;
};

export default Empty;
