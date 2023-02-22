import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const authorsSlice = createSlice({
    name: `authors`,
    initialState,
    reducers: {
        getAuthors: (state) => state,
        setAuthors: (state, action) => state = action.payload
    }
})

export const {
    getAuthors,
    setAuthors,
} = authorsSlice.actions;

export default authorsSlice.reducer;