import { v4 as uuid } from 'uuid';


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { name: action.movie.name, price: action.movie.price, id: uuid() }];
        case "REMOVE":
            //return state.filter(todo => todo.id !== action.id);
            return state;
        default:
            return state;
    }
};
export default reducer;