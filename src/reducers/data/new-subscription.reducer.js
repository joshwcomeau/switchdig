import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  SEARCH_AUTHOR_SUCCESS,
  UPDATE_MEDIA_TYPE,
} from '../../actions';


const initialState = {
  author: null,
  mediaTypes: {
    print: true,
    ebook: false,
    audiobook: false,
  },
};


const author = (state = initialState.author, action) => (
  action.type === SEARCH_AUTHOR_SUCCESS
    ? action.author
    : state
);

const mediaTypes = (state = initialState.mediaTypes, action) => {
  switch (action.type) {
    case UPDATE_MEDIA_TYPE:
      return { ...state, [action.id]: action.value };

    default:
      return state;
  }
};

export default combineReducers({
  author,
  mediaTypes,
});


// /////////////////
// SELECTORS //////
// ///////////////
const authorSelector = state => state.data.newSubscription.author;
export const stepSelector = createSelector(
  authorSelector,
  author =>
     author ? 2 : 1

);
