const counterChild = {
    num:0
}

export function childCounter(state = counterChild,action) {
    if (action.type === "increment child") {
        return{
            ...state,
            num:state.num+1
        }
    }
    if (action.type === "decrement child") {
        return{
            ...state,
            num:state.num-1
        }
    }
    return state
}