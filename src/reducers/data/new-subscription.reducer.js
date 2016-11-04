import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

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

const authorSelector = state => state.data.newSubscription.author;
export const stepSelector = createSelector(
  authorSelector,
  (author) => {
    return author ? 2 : 1;
  }
)
