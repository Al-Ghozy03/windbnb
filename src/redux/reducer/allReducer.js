import { combineReducers } from "redux";
import { adultCounter } from "./counterAdult";
import { childCounter } from "./counterChild";
import {locationState } from "./location";


export let allReducer = combineReducers({
    where:locationState,
    adult: adultCounter,
    child:childCounter
})