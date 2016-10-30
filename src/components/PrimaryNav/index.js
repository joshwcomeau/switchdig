// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';
import { Link } from 'react-router';

import styles from './styles';


const PrimaryNav = ({ decoration, backgroundColor }) => (
  <div className={css(styles.primaryNav)} style={{ backgroundColor }}>
    {decoration}
    <ul className={css(styles.ul)}>
      <li>
        <Link to="/faq" className={css(styles.navLink)}>FAQ</Link>
      </li>
      <li>
        <Link to="/login" className={css(styles.navLink)}>Login</Link>
      </li>
    </ul>
  </div>
);


PrimaryNav.propTypes = {
  decoration: PropTypes.node,
  backgroundColor: PropTypes.string.isRequired,
};

PrimaryNav.defaultProps = {

};

export default PrimaryNav;
