import { StyleSheet } from 'aphrodite';
import { white } from '../../constants/colors';

export default StyleSheet.create({
  primaryNav: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'montserrat',
    paddingRight: '25px',
  },

  ul: {
    display: 'flex',
  },

  li: {
    padding: '0 3px',
  },

  navLink: {
    display: 'block',
    padding: '0 20px',
    color: white,
    textDecoration: 'none',
  },
});
