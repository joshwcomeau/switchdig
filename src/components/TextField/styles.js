import { StyleSheet } from 'aphrodite/no-important';
import { indigo, gray, darkGray, black } from '../../constants/colors';

const borderBottomHorizontalAnimation = {
  '0%': {
    transform: 'scaleX(0)',
  },

  '100%': {
    transform: 'scaleX(1)',
  }
};


export default StyleSheet.create({
  textField: {
    position: 'relative',
    color: black,
  },
  input: {
    background: 'transparent',
    border: 'none',
    padding: '12px 0',
    marginTop: '10px',
    outline: 'none',
    minWidth: '280px',
    fontSize: '14px',
    color: darkGray,
  },
  bottomBorder: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: '-10px',
    height: '1px',
    backgroundColor: gray,
  },
  bottomBorderHighlight: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: '-11px',
    height: '2px',
    backgroundColor: indigo,
    transform: 'scaleX(0)',
  },
  bottomBorderHighlightActive: {
    animationName: borderBottomHorizontalAnimation,
    animationDuration: '500ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(.24,.75,.5,1.08)',
    transformOrigin: 'left bottom',
  }
});
