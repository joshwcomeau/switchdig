import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  rowWithBullet: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',

  },

  bullet: {
    fontFamily: '"Montserrat", sans-serif',
    borderWidth: '3px',
    borderStyle: 'solid',
    width: '50px',
    height: '50px',
    marginRight: '22px',
    lineHeight: '50px',
    textAlign: 'center',
    borderRadius: '100%',
  },
});
