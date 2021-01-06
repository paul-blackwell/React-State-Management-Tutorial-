import { v4 as uuid } from 'uuid';


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //return [...state, { name: action.name, price: action.price, id: uuid()  }];
    console.log('i was fired')
    case "REMOVE":
      //return state.filter(todo => todo.id !== action.id);
      return state;
    default:
      return state;
  }
};
export default reducer;