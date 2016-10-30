/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import { widthMediumPx } from '../../constants/sizes';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './styles';


const Authors = () => (
  <MaxWidthWrapper className={css(styles.authors)} maxWidth={widthMediumPx}>
    <h1 className={css(styles.heading)}>Never miss a great book again...</h1>
    <p className={css(styles.paragraph)}>
      I’m a voracious reader, and I have a&nbsp;
      <a href="/">lot</a>&nbsp;
      <a href="/">of</a>&nbsp;
      <a href="/">favorite</a>&nbsp;
      <a href="/">authors</a>.
    </p>
    <p className={css(styles.paragraph)}>
      Every month or two, I spend half an hour checking each author’s website to see if their newest books have been published. This is terribly ineffective; every site is different, some authors don’t have sites, others don’t update them.
    </p>
    <p className={css(styles.paragraph)}>
      Switchdig is a service to ensure you never miss new releases from your favorite authors. It’s something I built for myself to avoid literary droughts, and it’s proven so useful that I decided to put it online.
    </p>
  </MaxWidthWrapper>
);

Authors.propTypes = {

};

Authors.defaultProps = {

};

export default Authors;
