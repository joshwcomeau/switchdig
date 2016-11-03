import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue } from './constants/colors';

import configureStore from './store';

import App from './components/App';
import Header from './components/Header';
import Authors from './components/Authors';
import NotFound from './components/NotFound';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = getMuiTheme({
  palette: {
    primary1Color: blue,
    primary2Color: blue,
  }
})

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
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
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
