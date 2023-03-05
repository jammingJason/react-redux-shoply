import products from '../data.json';
const INITIAL_STATE = { products: products, cart: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, cart: [...state.cart, action.product] };
    case 'REMOVE':
      return { ...state, count: state.count + 1 };
    case 'RESET':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default rootReducer;
