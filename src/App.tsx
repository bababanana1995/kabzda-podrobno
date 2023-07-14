import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {Select} from "./Select/Select";
import {log} from "util";
import FormControl from "@mui/material/FormControl";
import SelectAutoWidth from "./Select/SelectMUI";
import {SimpleExample} from "./mystories/useEffect.stories";

function App() {
    const users = [{id: 1,title:'Oleg'},{id: 2,title:'Ivan'},{id: 3,title:'Sarafan'}]
  return (
    <div className="App">
{/*<UncontrolledAccordion title={'menu'}/>*/}
        {/*<Select value={'Menu'} onChange={()=>console.log('1')} items={users}/>*/}
        <UncontrolledAccordion title={'Menu'}/>
        {/*<Select value={'Menu'} items={users}/>*/}
        {/*<SelectAutoWidth value={'Name'} items={users}/>*/}
        <SimpleExample/>
    </div>
  );
}

export default App;
