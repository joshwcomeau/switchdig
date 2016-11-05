// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';

import { IDLE, LOADING, RESOLVED } from '../../constants/statuses';

import Spinner from '../Spinner';
import SampleBook from '../SampleBook';
import styles from './styles';


const BOOK_HEIGHT = 150;
const HEADING_HEIGHT = 30;
const ROW_HEIGHT = BOOK_HEIGHT + HEADING_HEIGHT;

const SampleBooks = ({ status, author, books }) => {
  if (status === LOADING) {
    return <Spinner containerHeight={ROW_HEIGHT} />;
  }

  return (
    <div
      className={css(styles.sampleBooksContainer)}
      style={{ height: ROW_HEIGHT }}
    >
      <h4
        className={css(styles.heading)}
        style={{ height: HEADING_HEIGHT, lineHeight: `${HEADING_HEIGHT}px` }}
      >
        Subscribing to author <span className={css(styles.author)}>{author}</span>.
        Some examples of their publications:
      </h4>

      <div
        className={css(styles.sampleBooks)}
        style={{ height: BOOK_HEIGHT }}
      >
        {books.map(book => <SampleBook key={book.id} {...book} />)}
      </div>
    </div>
  );
};

SampleBooks.propTypes = {
  status: PropTypes.oneOf([IDLE, LOADING, RESOLVED]).isRequired,
  author: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  author: state.data.newSubscription.author,
  books: state.data.sampleBooks,
  status: state.ui.requests.searchAuthorStatus,
});

export default connect(mapStateToProps)(SampleBooks);
