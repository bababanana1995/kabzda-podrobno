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
export const ResetEffectExample =()=>{
    const [counter,setCounter] = useState(generateData)
    useEffect(()=>{
        console.log('Effect occurred: ' + counter)
        return ()=>{
            console.log('Effect Reset')
        }
    },[counter])
return <>
    counter : {counter}
    <button onClick={()=>setCounter(counter+1)}>+</button>
</>
}
export const KeyTrackerExample =()=>{
    const [text,setText] = useState('')
    console.log('component render with ' + text)
    useEffect(()=>{
const handler =  (e:KeyboardEvent)=> {
    console.log(e.key)
    setText(text + e.key)
}
window.addEventListener('keypress', handler)
    return () => {
        window.removeEventListener('keypress',handler)
    }

    },[text])
return <>
    <input type={text}></input>
    <div>text : {text}</div>
</>
}
