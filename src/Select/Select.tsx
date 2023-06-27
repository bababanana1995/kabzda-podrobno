import React, {ChangeEvent, useState} from "react";
import s from './select.module.css'

type ItemType = {
    id: number
    title: string
}
type SelectPropsType = {
    value: string
    // onChange:(value:string)=>void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const [name, setName] = useState(props.value)
    const itemsMap = props.items.map(el => <div className={s.items} onClick={() => nameHandler(el.title)} key={el.id}>{el.title}</div>)

    const nameHandler = (name: string) => {
        setName(name)
        setCollapsed(!collapsed)
    }
    const onclickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            {/*<div onClick={()=>props.onChange(props.value)}>{props.value}</div>*/}
            <div className={s.select} onClick={onclickHandler}>{name}</div>
            {!collapsed && <div>{itemsMap}</div>}

        </div>
    )
}
