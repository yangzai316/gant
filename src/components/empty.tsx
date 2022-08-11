import React, { FC } from "react";

const Empty: FC<{ emptyText: string }> = ({ emptyText }) => {
  return <div className="no-data">{emptyText || "暂无数据"}</div>;
};

export default Empty;
