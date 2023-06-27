import React, {FC, useReducer} from 'react';
import {reducer} from "./Reducer";

type AccordionPropsType = {
    title: string
}
export const UncontrolledAccordion: FC<AccordionPropsType> = ({title}) => {

    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    // const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div>
            {/*<AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
            {/*{!collapsed && <AccordionBody/>}*/}
            <AccordionTitle title={title} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    // collapsed: boolean
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title, onClick}) => {
    return (
        <div onClick={onClick}>{title}</div>
    );
};

type AccordionBodyPropsType = {}

const AccordionBody: FC<AccordionBodyPropsType> = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};


