export const SET_FAVOURITE = "SET_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOAD = "GET_JOBS_LOAD"
export const GET_JOBS_ERR = "GET_JOBS_ERR"

export const setFavouriteAction = (company) =>  ({
        type: SET_FAVOURITE,
        payload: company
    })

export const removeFavouriteAction = (company) =>  ({
    type: REMOVE_FAVOURITE,
    payload: company
})


export const getJobsActionAsync = (query, urlParam) => {
    return async (dispatch, getState) => {
        try {
            const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?"
            const response = await fetch(baseEndpoint + urlParam + "=" + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS,
                    payload: data
                })
                dispatch({
                    type: GET_JOBS_LOAD,
                    payload: false
                })
            } else {
                dispatch({
                    type: GET_JOBS_LOAD,
                    payload: false
                })
                dispatch({
                    type: GET_JOBS_ERR,
                    payload: response.status + " " + response.statusText
                })
            }
        } catch (error) {
            dispatch({
                type: GET_JOBS_LOAD,
                payload: false
            })
            dispatch({
                type: GET_JOBS_ERR,
                payload: error
            })
        }
    }
}