import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

export const store = configureStore({
    reducer: {
        items: itemsReducer, // items 상태 추가
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
