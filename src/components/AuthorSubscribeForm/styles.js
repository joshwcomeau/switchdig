import { StyleSheet } from 'aphrodite/no-important';
import { blue } from '../../constants/colors';
import { desktopMq } from '../../constants/breakpoints';

export default StyleSheet.create({
  checkbox: {
    [desktopMq]: {
      display: 'inline-block',
      marginRight: '45px',
    },
  },
  activeField: {
    color: blue,
  },
});
