import {
  SEARCH_AUTHOR_REQUEST,
  searchAuthorSuccess,
} from '../actions';

import { fetchFromAPI } from '../helpers/api.helpers';


const API = store => next => action => {
  // Always dispatch the original action
  next(action);

  // Switch on the action type, so that we can fetch additional info
  // when needed
  switch (action.type) {
    case SEARCH_AUTHOR_REQUEST: {
      fetchFromAPI({
        resource: 'author/search',
        method: 'GET',
        data: { author: action.author }
      }).then(({ author, books }) => {
        next(searchAuthorSuccess({ author, books }));
      }).catch(err => {
        console.error("API fucked up", err);
      });
    }

    default:
      // Do nothing for all other actions.
      return null;
  }
};

export default API;
