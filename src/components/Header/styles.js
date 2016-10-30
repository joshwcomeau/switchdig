import { StyleSheet } from 'aphrodite';
import * as colors from '../../constants/colors';
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

  logo: {
    paddingLeft: '40px',
    fontSize: '20px',
  },

  icon: {
    transform: 'translateY(4px)', // vertical alignment D:
    fill: colors.gray,
  },

  name: {
    verticalAlign: 'middle',
    marginLeft: '3px',
  },
});
