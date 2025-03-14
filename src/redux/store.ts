import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        items: itemsReducer, // items 상태 추가
    },
});
