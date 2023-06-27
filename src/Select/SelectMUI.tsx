import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import s from "./select.module.css";
import {useState} from "react";

type ItemType = {
    id: number
    title: string
}
type SelectPropsType = {
    value: string
    // onChange:(value:string)=>void
    items: ItemType[]
}
export default function SelectAutoWidth(props:SelectPropsType) {
    // const [age, setAge] = React.useState('');
    const [name, setName] = useState(props.value)


    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value);
    };
    // const itemsMap = props.items.map(el => <div className={s.items} onClick={() => nameHandler(el.title)} key={el.id}>{el.title}</div>)
    const itemsMap = props.items.map(el => <MenuItem value={el.title} className={s.items} key={el.id}>{el.title}</MenuItem>)

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{name||props.value}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={name}
                    onChange={handleChange}
                    autoWidth
                    label={props.value}
                >
                    <MenuItem value="">
                        {/*<em>None</em>*/}
                    </MenuItem>
                    {itemsMap}
                </Select>
            </FormControl>
        </div>
    );
}
