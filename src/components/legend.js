import React from 'react';
import { STATE_DICT } from './../const'

export const Legend = ({ legend }) => {


    return <div className="legend" style={{ justifyContent: legend?.position || 'left' }}>
        {
            Object.keys(STATE_DICT).map((item, index) => {
                return <div key={index}>
                    <i style={{ backgroundColor: STATE_DICT[item].bgColor }}></i>
                    <span>{STATE_DICT[item].value}</span>
                </div>
            })

        }
        <div>
            <i style={{ backgroundColor: '#7868e6' }}></i>
            <span>子任务</span>
        </div>

    </div>
};

export default Legend;