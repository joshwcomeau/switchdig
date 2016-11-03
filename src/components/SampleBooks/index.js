// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { IDLE, LOADING, RESOLVED } from '../../constants/statuses';

import Spinner from '../Spinner';
import SampleBook from '../SampleBook';
import styles from './styles';


const ROW_HEIGHT = '150px';

const SampleBooks = ({ status, books }) => {
  if (status === LOADING) {
    return <Spinner containerHeight={ROW_HEIGHT} />;
  }

  return (
    <div className={css(styles.sampleBooks)} style={{ height: ROW_HEIGHT }}>
      {books.map(book => <SampleBook key={book.id} {...book} />)}
    </div>
  );
};

SampleBooks.propTypes = {
  status: PropTypes.oneOf([IDLE, LOADING, RESOLVED]).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  books: state.sampleBooks,
  status: state.requests.searchAuthorStatus,
});

export default connect(mapStateToProps)(SampleBooks);
