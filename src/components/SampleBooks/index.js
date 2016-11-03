// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const SampleBooks = () => {
  return (
    <div className={css(styles.sampleBooks)}>
      Your Component Here :)
    </div>
  );
};

SampleBooks.propTypes = {

};

SampleBooks.defaultProps = {

};

export default SampleBooks;
