export const SEARCH_AUTHOR_REQUEST = 'SEARCH_AUTHOR_REQUEST';
export const SEARCH_AUTHOR_SUCCESS = 'SEARCH_AUTHOR_SUCCESS';

export const searchAuthorRequest = ({ author }) => ({
  type: SEARCH_AUTHOR_REQUEST,
  author,
});

export const searchAuthorSuccess = ({ author, books }) => ({
  type: SEARCH_AUTHOR_SUCCESS,
  author,
  books,
});
