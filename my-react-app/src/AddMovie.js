import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { MovieContext } from "./context/movie.context";


const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { dispatch } = useContext(MovieContext);


    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", movie: {name: name, price: price, id: uuid() }});
    }


    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;