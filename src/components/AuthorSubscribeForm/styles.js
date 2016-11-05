import { StyleSheet } from 'aphrodite/no-important';
import { desktopMq } from '../../constants/breakpoints';

export default StyleSheet.create({
  checkboxes: {
    margin: '15px 0'
  },
  checkbox: {
    [desktopMq]: {
      display: 'inline-block',
      marginRight: '45px',
    },
  },
});
