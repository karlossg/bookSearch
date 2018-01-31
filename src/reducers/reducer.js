import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const reducer = combineReducers({ searchTerm });

export default reducer;