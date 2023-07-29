import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/data";

const dataslicer = createSlice({
    name: "dataslicer",
    initialState: Data,
    reducers: {
        addToCart: (state, action) => {
            return state.map((e) => {
                if (e.id === action.payload) {
                    return { ...e, count: e.count + 1 };
                }
                return e;
            });
        },
        removeFromCart: (state, action) => {
            return state.map((e) => {
                if (e.id === action.payload) {
                    return { ...e, count: e.count - 1 };
                }
                return e;
            });
        },
    },
});

export const { addToCart, removeFromCart } = dataslicer.actions;
export default dataslicer.reducer;
