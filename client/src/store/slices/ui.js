import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    loading: false,
    error: false,
    errorMessage: ""
}


const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload.error;
            state.errorMessage = action.payload.errorMessage;
        }


    }
})




export const uiActions = uiSlice.actions;

export default uiSlice;