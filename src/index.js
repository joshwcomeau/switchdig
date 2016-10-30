import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import configureStore from './store';

import App from './components/App';
import Header from './components/Header';
import Authors from './components/Authors';
import NotFound from './components/NotFound';
import DevTools from './components/DevTools';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App>
        <Header />

        <Match pattern="/authors" component={Authors} />
        <Miss component={NotFound} />

        <DevTools />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
