import {useMemo, useState} from "react";

export default {
    title:'useState demo'
}
const generateData=()=>{
    console.log('generateData')
    return 1
}
export const Example1=()=>{
    console.log('Example')
    // const initialValue = useMemo(generateData,[])
    const [counter,setCounter] = useState(generateData)
    const changer=(state:number)=>{
        return state + 1
    }
    return <>
        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </>

}
