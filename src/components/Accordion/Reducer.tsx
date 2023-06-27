export type ActionType = {
    type: "TOGGLE-COLLAPSED"
}
export type StateType={
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            const stateCopy = {...state, collapsed: !state.collapsed}
            return stateCopy
        default:
            return state
    }
}
