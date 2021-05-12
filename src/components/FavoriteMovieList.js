import React from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeFavorite} from '../actions/favoriteActions'


const FavoriteMovieList = (props) => {
    const favorites = [];
    // const favorite = props.favorites.find(favorite=>favorite.id===Number(id));


    const handleRemoveFavorite = (event) => {
        event.preventDefault()
        // props.removeFavorite(movie.id)
        console.log(props.displayFavorites)
        
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={handleRemoveFavorite}><span class="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorite.favorites,
        displayFavorites: state.favorite.displayFavorites,

    }
}

export default connect (mapStateToProps, {removeFavorite})(FavoriteMovieList);