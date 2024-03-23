import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Slice/language"

const store=configureStore({
    reducer:{
        language:languageReducer
    }
})
export default store;