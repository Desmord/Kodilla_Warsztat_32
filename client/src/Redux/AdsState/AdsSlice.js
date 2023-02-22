import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const adsSlice = createSlice({
    name: `ads`,
    initialState,
    reducers: {
        getAds: (state) => state,
        setAds: (state, action) => state = action.payload
    }
})

export const {
    getAds,
    setAds,
} = adsSlice.actions;
export default adsSlice.reducer;