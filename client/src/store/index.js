import { configureStore } from "@reduxjs/toolkit";
import predictionSlice from "./slices/prediction";
import uiSlice from "./slices/ui";



const store = configureStore({
    reducer: {
        prediction: predictionSlice.reducer,
        ui: uiSlice.reducer

    }
})


export default store