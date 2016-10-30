// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import DevTools from '../DevTools';


const App = ({ children }) => (
  <div>
    {children}
    <DevTools />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
