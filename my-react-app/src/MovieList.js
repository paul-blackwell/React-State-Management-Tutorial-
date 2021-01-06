import React, { useContext } from 'react';
import Movie from './Movie';

import { MovieContext } from './context/movie.context';

const MovieList = () => {
    const {movies} = useContext(MovieContext)

    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    )
}


export default MovieList;