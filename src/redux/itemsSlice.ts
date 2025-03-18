import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, IData } from "../api/productApi";

interface ItemsState {
    items: IData[];
    loading: boolean;
    error: string | null;
    filterItems: IData[]; // 필터된 항목 상태 추가
    noResult: boolean;
}

const initialState: ItemsState = {
    items: [],
    loading: false,
    error: null,
    filterItems: [],
    noResult: false,
};

export const getProducts = createAsyncThunk("items/fetchProducts", async () => {
    const response = await fetchProducts(); // API 호출
    return response; // API에서 반환된 데이터를 반환
});

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setFilterItem: (state, action: PayloadAction<IData[]>) => {
            state.filterItems = action.payload;
            state.noResult = action.payload.length === 0;
        },
        setResult: (state, action: PayloadAction<boolean>) => {
            state.noResult = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true; // API 호출 시작
                state.error = null; // 에러 초기화
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false; // API 호출 완료
                state.items = action.payload.data; // API에서 받은 data만 사용
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false; // API 호출 실패
                state.error = action.error.message || "Unknown error";
            });
    },
});
export const { setFilterItem, setResult } = itemsSlice.actions;
export default itemsSlice.reducer;
