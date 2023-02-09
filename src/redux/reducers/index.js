const initialState = {
    favs: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAVOURITE":
            return {...state,
                favs: [...state.favs, action.payload]}

        case "REMOVE_FAVOURITE":
            return {...state,
                favs: state.favs.filter((el) => el !== action.payload)}

        default:
            return state
    }
}

export default mainReducer