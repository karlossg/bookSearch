import { combineReducers } from 'redux';
import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions/actions';




const getBooks = (state = [], action) => {
  if (action.type === REQUEST_BOOKS) {
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
