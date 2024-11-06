import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkmodeSlice = createSlice({
    initialState,
    name: "dark-mode",
    reducers: {
        toggleDarkMode: (state) => !state,
        setDarkmode: () => true,
        resetDarkmode: () => false,
    },
});

export const { toggleDarkMode, setDarkmode, resetDarkmode } =
    darkmodeSlice.actions;
export default darkmodeSlice.reducer;
