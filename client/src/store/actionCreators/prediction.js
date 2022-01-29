import { predictionActions } from "../slices/prediction"
import { uiActions } from "../slices/ui"
import requestModule from "../../utils/requestModule"

export const getSuggestions = (sequence = "") => {
    return async (dispatch) => {
        dispatch(uiActions.setLoading(true))
        dispatch(uiActions.setError({
            error: false,
            errorMessage: ""
        }))

        try {
            const { data } = await requestModule("POST", "/prediction", { sequence })
            console.log(data)
            dispatch(predictionActions.setSuggestions(data.data))

        } catch (error) {
            console.log(error);

            const errorObject = error?.response?.data
            if (errorObject?.error) {
                return dispatch(uiActions.setError({
                    error: errorObject.error,
                    errorMessage: errorObject.message

                }))
            }
            dispatch(uiActions.setError({
                error: true,
                errorMessage: "Could Not Fetch Prediction"
            }))


        }

        dispatch(uiActions.setLoading(false))

    }

}