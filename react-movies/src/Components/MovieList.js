import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    return (
        <>
            {                
                props.movies.map((movie, index) => (
                    <div className='d-flex justify-content-start m-3' key={index}>
                        <MovieCard movie={movie}></MovieCard>
                    </div>
                ))
            }
        </>
    )
}

export default MovieList;