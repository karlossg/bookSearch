import { combineReducers } from 'redux';
import { GET_BOOKS } from '../actions/actions';

const getBooks = (state = [], action) => {
  if (action.type === GET_BOOKS) {
    return [
      ...state,
      {
        books: action.books
      }
    ];
  }
  return state;
};

const reducer = combineReducers({ getBooks });

export default reducer;
