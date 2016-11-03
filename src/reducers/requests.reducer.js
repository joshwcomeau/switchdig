import { combineReducers } from 'redux';

import {
  SEARCH_AUTHOR_REQUEST,
  SEARCH_AUTHOR_SUCCESS
} from '../actions';

const IDLE = 'idle';
const LOADING = 'loading';


// TODO: Generalize this reducer so new ones can be created easily.
const searchAuthor = (state = IDLE, action) => {
  switch (action.type) {
    case SEARCH_AUTHOR_REQUEST: return LOADING;
    case SEARCH_AUTHOR_SUCCESS: return IDLE;
    default: return state;
  }
}

export default combineReducers({
  searchAuthor
});
