// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';


const Spinner = ({ containerHeight }) => (
  <div
    className={css(styles.spinnerContainer)}
    style={{ height: containerHeight }}
  >
    <div className={css(styles.spinner)} />
  </div>
);

export default Spinner;
