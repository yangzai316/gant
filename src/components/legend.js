import React from 'react';
import { STATE_MAP } from './../const'

export const Legend = ({ legend }) => {


    return <div className="legend" style={{ justifyContent: legend?.position || 'left' }}>
        {
            Object.keys(STATE_MAP).map((item, index) => {
                return <div key={index}>
                    <i style={{ backgroundColor: STATE_MAP[item].bgColor }}></i>
                    <span>{STATE_MAP[item].value}</span>
                </div>
            })

        }

    </div>
};

export default Legend;