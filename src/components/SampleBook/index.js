// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const SampleBook = ({ title, author, image }) => {
  return (
    <div className={css(styles.bookContainer)}>
      <img
        className={css(styles.book)}
        src={image}
      />
    </div>
  );
};

SampleBook.propTypes = {

};

SampleBook.defaultProps = {

};

export default SampleBook;
