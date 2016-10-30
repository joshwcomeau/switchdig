import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import configureStore from './store';

import App from './components/App';
import Header from './components/Header';
import Authors from './components/Authors';
import NotFound from './components/NotFound';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Match
        pattern="/:mediaType"
        render={({ params }) => (
          <App>
            <Header mediaType={params.mediaType} />

            <Match pattern="/authors" component={Authors} />

            <Miss component={NotFound} />
          </App>
        )}
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);
