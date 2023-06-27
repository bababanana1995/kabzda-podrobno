import {ActionType, reducer, StateType} from "./Reducer";

test('should be collapsed',()=>{
    const state:StateType={
        collapsed:false
    }
   const newState = reducer(state,{type:"TOGGLE-COLLAPSED"})
expect(newState.collapsed).toBe(true)
})
test('should be not collapsed',()=>{
    const state:StateType={
        collapsed:true
    }
   const newState = reducer(state,{type:"TOGGLE-COLLAPSED"})
expect(newState.collapsed).toBe(false)
})

