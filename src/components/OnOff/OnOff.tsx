import React, {FC} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    isActive: (onOff:boolean)=>void
    onOff:boolean
}

export const OnOff: FC<OnOffPropsType> = ({isActive, onOff}) => {
const onClickHandler =(t:boolean)=>{
    isActive(t)
}
    return (
        <div className={s.wrapper}>
            <span onClick={()=>onClickHandler(true)} className={s.button} style={{background: onOff ? 'green' : ''}}>On</span>
            <span onClick={()=>onClickHandler(false)} className={s.button} style={{background: onOff ? '' : 'red'}}>Off</span>
            <span className={s.light} style={{background: onOff ? 'green' : 'red'}}></span>
        </div>
    );
};
