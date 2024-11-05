import { createSlice } from "@reduxjs/toolkit";
import backendHost from "../../api";
import { GET_ECONOMIC_IMPACT_ANALYTICS_ROUTE } from "../../utils";
const initialState = [];

const analyticsSlice = createSlice({
    name: "Analytics",
    initialState,
    reducers: {
        setAnalytics: (_, { payload: p }) => p,
        resetAnalyitcs: () => initialState,
    },
});
export const getAnalytics = () => (dispatch) => {
    backendHost
        .get(GET_ECONOMIC_IMPACT_ANALYTICS_ROUTE)
        .then(({ data: { analytics } }) => dispatch(setAnalytics(analytics)))
        .catch((err) => console.error("ERROR", err));
};

export const { setAnalytics, resetAnalyitcs } = analyticsSlice.actions;
export default analyticsSlice.reducer;
