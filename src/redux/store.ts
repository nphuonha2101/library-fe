import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "./loanSlice";

const loanStore = configureStore({
    reducer: {
        loan: loanReducer,
    },
});

export type RootState = ReturnType<typeof loanStore.getState>;
export type AppDispatch = typeof loanStore.dispatch;

export default loanStore;