import { configureStore } from "@reduxjs/toolkit";
import dataSlicer from "./dataSlicer";

export const store = configureStore({
    reducer: {
        data: dataSlicer,
    },
});
