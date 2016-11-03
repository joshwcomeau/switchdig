import { combineReducers } from 'redux';

import sampleBooks from './sample-books.reducer';
import requests from './requests.reducer';


export default combineReducers({
  requests,
  sampleBooks,
});
