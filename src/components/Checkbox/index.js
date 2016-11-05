// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';
import Icon from '../Icon';


const Checkbox = ({ className, label, isChecked, onChange }) => {
  // For acessibility, we'll use a regular, native checkbox.
  // However, it'll be completely transparent, and invisibly floating
  // above the content. It'll catch all clicks, but the underlying
  // Icon component will handle the aesthetics.
  return (
    <div className={css(styles.checkboxWrapper, className)}>
      <input
        type="checkbox"
        className={css(styles.nativeCheckbox)}
        onChange={onChange}
        defaultChecked={isChecked}
      />
      <Icon
        size={20}
        value={isChecked ? 'checkbox-checked' : 'checkbox-unchecked'}
        className={css(styles.checkbox)}
      />
      <span className={css(styles.label)}>{label}</span>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
