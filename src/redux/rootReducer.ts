import { combineReducers } from "@reduxjs/toolkit";
import loanReducer from "./loanSlice";

export const rootReducer = combineReducers({
    loan: loanReducer,
});