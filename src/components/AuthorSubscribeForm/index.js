// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'aphrodite/no-important';

import { IDLE } from '../../constants/statuses';
import {
  searchAuthorRequest,
  searchAuthorInput,
  updateMediaTypes,
} from '../../actions';
import {
  stepSelector,
} from '../../reducers/data/new-subscription.reducer';

import Checkbox from '../Checkbox';
import TextField from '../TextField';
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

  handleAuthorSearch(ev) {
    // Immediately dispatch an event that will let us react to the fact that
    // results will be incoming.
    this.props.searchAuthorInput();

    // Also submit the value for processing. This is done as a separate action
    // because it's debounced, to avoid sending a bunch of server requests.
    this.submitSearchRequest(ev.target.value);
  }

  render() {
    const {
      searchAuthorStatus,
      mediaTypes,
      step,
      updateMediaTypes,
    } = this.props;

    return (
      <form>
        <RowWithBullet currentStepNum={step} bulletNum={1}>
          <TextField
            className={css(styles.textField)}
            label="Enter an author's name"
            placeholder="Jim Butcher"
            onChange={this.handleAuthorSearch}
          />
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={2}>
          Select the media types you care about
          <div className={css(styles.checkboxes)}>
            <Checkbox
              className={styles.checkbox}
              label="Print"
              isChecked={mediaTypes.print}
              onChange={ev => updateMediaTypes({
                mediaType: 'print',
                value: ev.target.checked,
              })}
            />
            <Checkbox
              className={styles.checkbox}
              label="E-book"
              isChecked={mediaTypes.ebook}
              onChange={ev => updateMediaTypes({
                mediaType: 'ebook',
                value: ev.target.checked,
              })}
            />
            <Checkbox
              className={styles.checkbox}
              label="Audiobook"
              isChecked={mediaTypes.audiobook}
              onChange={ev => updateMediaTypes({
                mediaType: 'audiobook',
                value: ev.target.checked,
              })}
            />
          </div>
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={3}>
          Final Options
        </RowWithBullet>

        { searchAuthorStatus !== IDLE && <SampleBooks /> }

      </form>
    )
  }
}

AuthorSubscribeForm.propTypes = {
  searchAuthorStatus: PropTypes.string,
};

const mapStateToProps = state => ({
  searchAuthorStatus: state.ui.requests.searchAuthorStatus,
  mediaTypes: state.data.newSubscription.mediaTypes,
  step: stepSelector(state),
});

export default connect(
  mapStateToProps,
  { searchAuthorRequest, searchAuthorInput, updateMediaTypes }
)(AuthorSubscribeForm);
