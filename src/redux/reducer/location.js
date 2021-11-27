const defaultLocation={
    value:"helski",
    location:"helski"
}

export function locationState(state = defaultLocation, action) {
    if (action.type === "helski") {
        return{
            ...state,
            value:action.value,
            location:action.location
        }
    }
    if (action.type === "oulu") {
        return{
            ...state,
            value:action.value,
            location:action.location
        }
    }
    if (action.type === "vaasa") {
        return{
            ...state,
            value:action.value,
            location:action.location
        }
    }
    if (action.type === "turku") {
        return{
            ...state,
            value:action.value,
            location:action.location
        }
    }
    return state
}