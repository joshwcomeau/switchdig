// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'aphrodite';

import { IDLE } from '../../constants/statuses';
import { searchAuthorRequest, searchAuthorInput } from '../../actions';

import TextField from 'material-ui/TextField';
import RowWithBullet from '../RowWithBullet';
import SampleBooks from '../SampleBooks';
import styles from './styles';


class AuthorSubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.submitSearchRequest = debounce(this.submitSearchRequest.bind(this), 500);
    this.handleAuthorSearch = this.handleAuthorSearch.bind(this);
  }

  submitSearchRequest(author) {
    this.props.searchAuthorRequest({ author });
  }

  handleAuthorSearch(ev, value) {
    // Immediately dispatch an event that will let us react to the fact that
    // results will be incoming.
    this.props.searchAuthorInput();

    // Also submit the value for processing. This is done as a separate action
    // because it's debounced, to avoid sending a bunch of server requests.
    this.submitSearchRequest(value);
  }

  render() {
    const { searchAuthorStatus } = this.props;

    return (
      <form>
        <RowWithBullet bulletNum={1}>
          <TextField
            className={css(styles.textField)}
            floatingLabelText="Enter an author's name"
            onChange={this.handleAuthorSearch}
          />
        </RowWithBullet>

        { searchAuthorStatus !== IDLE && <SampleBooks /> }
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
  searchAuthorStatus: PropTypes.string,
};

const mapStateToProps = state => ({
  searchAuthorStatus: state.requests.searchAuthorStatus,
});

export default connect(
  mapStateToProps,
  { searchAuthorRequest, searchAuthorInput }
)(AuthorSubscribeForm);
