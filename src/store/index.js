import { configureStore } from "@reduxjs/toolkit";
import analytics from "./slices/analyticsSlice";
import darkmode from "./slices/darkmodeSlice";

const store = configureStore({
    reducer: {
        analytics,
        darkmode,
    },
});

export default store;
