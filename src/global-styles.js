import { StyleSheet } from './helpers/global-aphrodite';
import { green } from './constants/colors';

export default StyleSheet.create({
  globals: {
    '*a': {
      position: 'relative',
      color: green,
      textDecoration: 'none',
      fontWeight: 'bold',

      ':after': {
        content: '" "',
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        right: 0,
        height: '2px',
        background: green,
        opacity: 0,
        transform: 'translateY(2px)',
        transition: 'opacity 200ms, transform 200ms',
        borderRadius: '5px',
        pointerEvents: 'none',
      },

      ':hover:after': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  },
});
