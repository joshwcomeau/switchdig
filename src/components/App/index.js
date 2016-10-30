// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';


const App = ({ children }) => <div>{children}</div>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
