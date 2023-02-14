import { GET_JOBS, GET_JOBS_LOAD, GET_JOBS_ERR } from "../actions"

const initialState = {
    jobsList: [],
    isLoading: false,
    errorText: ""
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {...state,
                jobsList: action.payload}

        case GET_JOBS_LOAD:
            return {...state,
                isLoading: action.payload}

        case GET_JOBS_ERR:
            return {...state,
                hasError: action.payload}
        default:
            return state
    }
}

export default jobsReducer