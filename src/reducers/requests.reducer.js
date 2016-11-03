import { combineReducers } from 'redux';

import { IDLE, LOADING, RESOLVED } from '../constants/statuses';
import {
  SEARCH_AUTHOR_INPUT,
  SEARCH_AUTHOR_SUCCESS
} from '../actions';


// TODO: Generalize this reducer so new ones can be created easily.
const searchAuthorStatus = (state = IDLE, action) => {
  switch (action.type) {
    case SEARCH_AUTHOR_INPUT: return LOADING;
    case SEARCH_AUTHOR_SUCCESS: return RESOLVED;
    default: return state;
  }
}

export default combineReducers({
  searchAuthorStatus
});
