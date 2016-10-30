// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Authors = () =>
   (
     <div className={css(styles.authors)}>
      Author Track
     </div>
  )
;

Authors.propTypes = {

};

Authors.defaultProps = {

};

export default Authors;
