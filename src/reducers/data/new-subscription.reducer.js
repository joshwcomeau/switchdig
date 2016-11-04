import { combineReducers } from 'redux';

import {
  SEARCH_AUTHOR_SUCCESS
} from '../../actions';


const initialState = {
  author: null,
}


const author = (state = initialState.author, action) => (
  action.type === SEARCH_AUTHOR_SUCCESS
    ? action.author
    : state
);

export default combineReducers({
  author
});
