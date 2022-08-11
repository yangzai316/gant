import React, { FC ,ReactNode} from "react";


export const Tip: FC<ReactNode> = ({ children }) => {
  return <div className="tip">{children || "姓名/日期"}</div>;
};
export default Tip;
