import { combineReducers } from 'redux';
import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions/actions';


const initialState = {
  books: [],
  searchValue: '',
  isFetching: false
}

const getBooks = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        books: action.books,
      })
    default:
      return state
  }
};

const reducer = combineReducers({ getBooks });

export default reducer;
