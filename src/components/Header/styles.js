import { StyleSheet } from 'aphrodite';
import { headerHeightPx } from '../../constants/sizes';

export default StyleSheet.create({
  header: {
    height: headerHeightPx,
    lineHeight: headerHeightPx,
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'montserrat',
  },

  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
  },

  navDecoration: {
    position: 'absolute',
    left: `-${headerHeightPx}`,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: `0 ${headerHeightPx} ${headerHeightPx} 0`,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
