// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'aphrodite';

import { searchAuthorRequest } from '../../actions';

import TextField from 'material-ui/TextField';
import RowWithBullet from '../RowWithBullet';
import SampleBooks from '../SampleBooks';
import styles from './styles';


class AuthorSubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.handleAuthorSearch = debounce(this.handleAuthorSearch.bind(this), 500);
  }

  handleAuthorSearch(ev, value) {
    this.props.searchAuthorRequest({ author: value });
  }

  render() {
    return (
      <form>
        <RowWithBullet bulletNum={1}>
          <TextField
            className={css(styles.textField)}
            floatingLabelText="Enter an author's name"
            onChange={this.handleAuthorSearch}
          />
        </RowWithBullet>

        <SampleBooks />
        <RowWithBullet bulletNum={2}>
          More Options
        </RowWithBullet>
        <RowWithBullet bulletNum={3}>
          Final Options
        </RowWithBullet>
      </form>
    )
  }
}

AuthorSubscribeForm.propTypes = {

};

export default connect(null, { searchAuthorRequest })(AuthorSubscribeForm);
