// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import { blue } from '../../constants/colors';
import styles from './styles';


const RowWithBullet = ({ bulletNum, bulletColor, children }) => (
  <div className={css(styles.rowWithBullet)}>
    <div
      className={css(styles.bullet)}
      style={{
        color: bulletColor,
        borderColor: bulletColor,
      }}
    >
      {bulletNum}
    </div>
    {children}
  </div>
);


RowWithBullet.propTypes = {
  bulletNum: PropTypes.number.isRequired,
  bulletColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

RowWithBullet.defaultProps = {
  bulletColor: blue,
};

export default RowWithBullet;
