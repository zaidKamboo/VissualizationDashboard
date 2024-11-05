import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkmodeSlice = createSlice({
    initialState,
    name: "dark-mode",
    reducers: {
        toggleDarkMode: (state) => !state,
    },
});

export const { toggleDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
