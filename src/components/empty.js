import React from "react";

export const Empty = ({ emptyText }) => {
  return <div className="no-data">{emptyText || "暂无数据"}</div>;
};
