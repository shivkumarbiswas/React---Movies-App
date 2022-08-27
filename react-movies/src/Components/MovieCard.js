import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = (props) => {
    return (
        <>     
            <div className='card'>
                <div className='card-haeder'>
                    Movie Details
                </div>
                <div className='card-body'>
                    <div>Movie Name: {props.movie.name}</div>
                    <div>Movie Rating: {props.movie.rating}</div>
                    <div>Movie Released Date: {props.movie.released_date}</div>
                </div>
            </div>            
        </>
    )
}

export default MovieCard;