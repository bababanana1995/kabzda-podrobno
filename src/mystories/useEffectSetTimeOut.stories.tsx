import {useEffect, useMemo, useState} from "react";

export default {
    title:'SetTimeOut demo'
}
const generateData=()=>{
    console.log('generateData')
    return 1
}
export const SetTimeOutExample=()=>{
    console.log('SetTimeOutExample')
    const [counter,setCounter] = useState(generateData)

    useEffect(()=>{
setTimeout(()=>{
    document.title = (counter).toString()
},2000)
    },[counter])
    return <>
        Hello,
        {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>

}
