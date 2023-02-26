import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

const appSlice = createSlice({
    name: `app`,
    initialState,
    reducers: {
        getAppState: (state) => state,
        getAppUser: state => state.user,
        setAppUser: (state, action) => state = action.payload
    }
})

export const {
    getAppState, getAppUser, setAppUser
} = appSlice.actions;

export default appSlice.reducer;