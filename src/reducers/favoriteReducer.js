import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";

const favorites = []

const initialState = {
    favorites: favorites,
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE: 
            const newFavorite = {
                title: action.payload.title,
                id: action.payload.id
            }
            return {
                ...state,
                favorites: [...state.favorites, newFavorite]                
            }
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;