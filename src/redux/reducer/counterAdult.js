const counterAdult = {
    num:0
}

export function adultCounter(state = counterAdult,action) {
    if (action.type === "increment") {
        return{
            ...state,
            num:state.num+1
        }
    }
    if (action.type === "decrement") {
        return{
            ...state,
            num:state.num-1
        }
    }
    return state
}