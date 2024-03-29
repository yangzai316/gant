import React, { FC } from "react";
import { LegendType } from "./../index";
 

export const Legend: FC<LegendType> = ({ legend, __STATEMAP__ }) => {
  return (
    legend.show && (
      <div
        className="legend"
        style={{ justifyContent: legend?.position || "left" }}
      >
        {Object.keys(__STATEMAP__).map((item, index) => {
          return (
            <div key={index}>
              <i style={{ backgroundColor: __STATEMAP__[item]?.bgColor }}></i>
              <span>{__STATEMAP__[item].label}</span>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Legend;
