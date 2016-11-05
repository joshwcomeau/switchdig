// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';


// TODO: Statuses.
// Loading -> show a spinner
// Error -> Red underline, little X icon, error message below
// Success -> green underline, little checkmark

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  render() {
    const { id, label, placeholder, onChange, className } = this.props;

    return (
      <label htmlFor={id} className={css(styles.textField, className)}>
        {label}
        <br />
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className={css(styles.input)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={onChange}
        />
        <div className={css(styles.bottomBorder)} />
        <div
          className={css(
            styles.bottomBorderHighlight,
            this.state.focused && styles.bottomBorderHighlightActive
          )}
        />
      </label>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
