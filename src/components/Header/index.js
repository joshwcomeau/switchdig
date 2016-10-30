// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import { getPrimaryColorForMediaType } from '../../helpers/style';
import styles from './styles';

import PrimaryNav from '../PrimaryNav';


const Header = ({ mediaType }) => {
  const primaryColor = getPrimaryColorForMediaType(mediaType);

  const navDecoration = (
    <div
      className={css(styles.navDecoration)}
      style={{ borderColor: primaryColor }}
    />
  );

  return (
    <header className={css(styles.header)}>
      <div
        className={css(styles.topLine)}
        style={{ backgroundColor: primaryColor }}
      />

      <h1>Switchdig</h1>

      <PrimaryNav
        decoration={navDecoration}
        backgroundColor={primaryColor}
      />
    </header>
  );
};

Header.propTypes = {
  mediaType: PropTypes.oneOf(['authors']),
};

Header.defaultProps = {

};

export default Header;
