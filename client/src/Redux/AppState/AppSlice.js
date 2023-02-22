import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const appSlice = createSlice({
    name: `app`,
    initialState,
    reducers: {
        getAppState: (state) => state,
    }
})

export const {
    getAppState,
} = appSlice.actions;

export default appSlice.reducer;