import {useEffect, useMemo, useState} from "react";

export default {
    title:'SetInterval demo'
}
const generateData=()=>{
    console.log('generateData')
    return 1
}
export const SetIntervalExample=()=>{
    console.log('SetTimeOutExample')
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)

    useEffect(()=>{
setInterval(()=>{
    setSeconds((state)=>state+1)
    },1000)
    },[])
    if (seconds ===60){
        setSeconds(0)
        setMinutes(minutes+1)
    }
    if(minutes===60){
        setMinutes(0)
        setHours(hours+1)
    }
    if(hours===12){
        setHours(0)
    }
    return <>
        {/*Hello,*/}
        {`${hours}:${minutes}:${seconds}`}
        {/*<button onClick={()=>setCounter(counter+1)}>+</button>*/}
    </>

}
