import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
    id: number;
    goods: string;
    price: string;
    src: string;
}

interface ItemsState {
    items: Item[];
    filterItems: Item[]; // 필터된 항목 상태 추가
    noResult: boolean;
}

const initialState: ItemsState = {
    items: [
        {
            id: 0,
            goods: "Jacquard-weave top",
            price: "39,900",
            src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679837632/ophtekkvf1oyhya8fdwe.jpg",
        },
        {
            id: 1,
            goods: "스트레이트 팬츠",
            price: "59,900",
            src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679837681/qjujhpcmmykyoygm2oyg.jpg",
        },
        {
            id: 2,
            goods: "새틴 드레스",
            price: "69,000",
            src: "https://res.cloudinary.com/dyoj0undj/image/upload/v1679931154/hsjk6ntz6cd9kn7t6n2a.jpg",
        },
    ],
    filterItems: [],
    noResult: false,
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setFilterItem: (state, action: PayloadAction<Item[]>) => {
            state.filterItems = action.payload;
            state.noResult = action.payload.length === 0;
        },
        setResult: (state, action: PayloadAction<boolean>) => {
            state.noResult = action.payload;
        },
    },
});
export const { setFilterItem, setResult } = itemsSlice.actions;
export default itemsSlice.reducer;
