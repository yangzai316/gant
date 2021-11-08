import React from 'react';
import { STATEDICT } from './../const'

export const Legend = () => {


    return <div className="legend">
        {
            Object.keys(STATEDICT).map(item => {
                return <>
                    <i style={{ backgroundColor: STATEDICT[item].bgColor }}></i>
                    <span>{STATEDICT[item].value}</span>
                </>
            })

        }

    </div>
};

export default Legend;