import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    suggestions: [],
}

const predictionSlice = createSlice({
    name: "prediction",
    initialState,
    reducers: {
        setSuggestions(state, action) {
            state.suggestions = action.payload
        },
        clearSuggestions(state) {
            state.suggestions = []
        }

    }
})

export const predictionActions = predictionSlice.actions;
export default predictionSlice;