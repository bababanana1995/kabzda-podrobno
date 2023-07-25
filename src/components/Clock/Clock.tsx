import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./analogClock/AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";


type ClockPropsType = {
    mode?: 'digital' | 'analog'
}
export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)
    }, [])
    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
            view = <DigitalClockView date={date}/>
            break
    }
    return (
        <div>
            {view}
        </div>
    )
}
export type ClockViewPropsType = {
    date: Date
}
