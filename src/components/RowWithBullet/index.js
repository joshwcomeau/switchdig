// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import { blue, gray } from '../../constants/colors';
import styles from './styles';


const RowWithBullet = ({
  bulletNum,
  bulletActiveColor,
  bulletInactiveColor,
  isActive,
  children,
}) => (
  <div className={css(styles.rowWithBullet)}>
    <div
      className={css(styles.bullet)}
      style={{
        color: isActive ? bulletActiveColor : bulletInactiveColor,
        borderColor: isActive ? bulletActiveColor : bulletInactiveColor,
      }}
    >
      {bulletNum}
    </div>
    <div className={css(styles.rowContent)}>
      {children}
    </div>
    <div className={css(styles.connectingLine)} />
  </div>
);


RowWithBullet.propTypes = {
  bulletNum: PropTypes.number.isRequired,
  bulletActiveColor: PropTypes.string.isRequired,
  bulletInactiveColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

RowWithBullet.defaultProps = {
  bulletActiveColor: blue,
  bulletInactiveColor: gray,
};

export default RowWithBullet;
