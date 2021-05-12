export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const addFavorite = (favorite) =>{
    return({type: ADD_FAVORITE, payload: favorite});
}

export const removeFavorite = (id) =>{
    return({type: REMOVE_FAVORITE, payload: id});
}