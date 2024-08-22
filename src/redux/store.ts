import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const loanStore = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(loanStore);

export type RootState = ReturnType<typeof loanStore.getState>;
export type AppDispatch = typeof loanStore.dispatch;

export default loanStore;