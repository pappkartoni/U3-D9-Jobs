export const SET_FAVOURITE = "SET_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"
export const GET_JOBS = "GET_JOBS"

export const setFavouriteAction = (company) =>  ({
        type: SET_FAVOURITE,
        payload: company
    })

export const removeFavouriteAction = (company) =>  ({
    type: REMOVE_FAVOURITE,
    payload: company
})


export const getJobsActionAsync = (query) => {
    return async (dispatch, getState) => {
        try {
            const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS,
                    payload: data
                })
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
        console.log(error)
        }
    }
}