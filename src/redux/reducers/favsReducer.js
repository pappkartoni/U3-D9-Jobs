import { SET_FAVOURITE, REMOVE_FAVOURITE } from "../actions" 

const initialState = {
    favsList: []
}

const favsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            return {...state,
                favsList: [...state.favsList, action.payload]}

        case REMOVE_FAVOURITE:
            return {...state,
                favsList: state.favsList.filter((el) => el !== action.payload)}

        default:
            return state
    }
}

export default favsReducer