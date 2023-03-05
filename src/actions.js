import { ADD, REMOVE, RESET } from './actionTypes';

// export const add = () => ({ type: ADD });
export const remove = () => ({ type: REMOVE });
export const reset = () => ({ type: RESET });

export const add = (product) => ({
  type: ADD,
  product,
});
