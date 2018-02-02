import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from '../actions/actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return [
      ...state,
      {
        searchTerm: action.searchTerm
      }
    ];
  }
  return state;
};

const reducer = combineReducers({ searchTerm });

export default reducer;
