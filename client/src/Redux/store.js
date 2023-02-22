import { configureStore } from "@reduxjs/toolkit";

import AuthorsReducer from "./AuthorsState/AuthorsSlice";
import AdsReducer from "./AdsState/AdsSlice";
import AppReducer from "./AppState/AppSlice";

const store = configureStore({
    reducer: {
        authors: AuthorsReducer,
        ads: AdsReducer,
        app: AppReducer,
    }
})

export default store;