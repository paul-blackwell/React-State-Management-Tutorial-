import React, {useReducer, createContext } from 'react';
import movieReducer from '../reducers/movie.reducer';

export const MovieContext = createContext();

const defaultMovies = [
    {
        name: 'Harry Potter',
        price: '$10',
        id: 23124
    },
    {
        name: 'Game of Thrones',
        price: '$10',
        id: 2566124
    },
    {
        name: 'Inception',
        price: '$10',
        id: 23524
    },
]



export const MovieProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, defaultMovies);
    
    return (
        <MovieContext.Provider value={{movies, dispatch}}>
            {props.children}
        </MovieContext.Provider>
    );
}
