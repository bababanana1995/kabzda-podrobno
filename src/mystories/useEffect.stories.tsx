import {useEffect, useMemo, useState} from "react";

export default {
    title:'useEffect demo'
}
const generateData=()=>{
    console.log('generateData')
    return 1
}
export const SimpleExample=()=>{
    console.log('Example')
    const [counter,setCounter] = useState(generateData)
useEffect(()=>{
    console.log('useEffect')
    document.title = counter.toString()
//api.getUsers().then('')
//setInterval()
//indexDB
//document.getElementById
//document.title='Users'
})
    useEffect(()=>{
        console.log('useEffect first render (componentDidMount)')
    },[])
    useEffect(()=>{
        console.log('зависимость от counter')
    },[counter])
    // если не добавлять зависимость и не ставить квадратные скобки то useEffect срабатывает после каждой перерисовки

    return <>
        Hello,
        {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>

}
