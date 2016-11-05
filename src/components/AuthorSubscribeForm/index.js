// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'aphrodite/no-important';

import { IDLE } from '../../constants/statuses';
import {
  searchAuthorRequest,
  searchAuthorInput,
  updateMediaType,
} from '../../actions';
import {


  stepSelector,
} from '../../reducers/data/new-subscription.reducer';

import CheckboxGroup from '../CheckboxGroup';
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
      ...actions
    } = this.props;

    return (
      <form>
        <RowWithBullet currentStepNum={step} bulletNum={1}>
          <TextField
            className={step === 1 && styles.activeField}
            label="Enter an author’s name"
            placeholder="Jim Butcher"
            onChange={this.handleAuthorSearch}
          />
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={2}>
          <span className={step === 1 && css(styles.activeField)}>
            Select the media types you care about
          </span>
          <CheckboxGroup
            checkboxes={[
              { id: 'print', label: 'Print' },
              { id: 'ebook', label: 'E-book' },
              { id: 'audiobook', label: 'Audiobook' },
            ]}
            onChange={actions.updateMediaType}
            checkedById={mediaTypes}
          />
        </RowWithBullet>

        <RowWithBullet currentStepNum={step} bulletNum={3}>
          Final Options
        </RowWithBullet>

        { searchAuthorStatus !== IDLE && <SampleBooks /> }

      </form>
    );
  }
}

AuthorSubscribeForm.propTypes = {
  searchAuthorStatus: PropTypes.string,
  mediaTypes: PropTypes.shape({
    print: PropTypes.bool.isRequired,
    ebook: PropTypes.bool.isRequired,
    audiobook: PropTypes.bool.isRequired,
  }),
  step: PropTypes.number.isRequired,
  searchAuthorInput: PropTypes.func.isRequired,
  searchAuthorRequest: PropTypes.func.isRequired,
  updateMediaType: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchAuthorStatus: state.ui.requests.searchAuthorStatus,
  mediaTypes: state.data.newSubscription.mediaTypes,
  step: stepSelector(state),
});

export default connect(
  mapStateToProps,
  { searchAuthorInput, searchAuthorRequest, updateMediaType }
)(AuthorSubscribeForm);
