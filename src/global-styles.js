import { StyleSheet } from './helpers/global-aphrodite';

import { orange, offwhite, black } from './constants/colors';
import { desktopMq } from './constants/breakpoints';

export default StyleSheet.create({
  globals: {
    '*body': {
      background: offwhite,
      color: black,
    },
    '*a': {
      position: 'relative',
      color: orange,
      textDecoration: 'none',
      fontWeight: 'bold',

      ':after': {
        content: '" "',
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        right: 0,
        height: '2px',
        background: orange,
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

    '*h1': {
      fontSize: '26px',
      marginBottom: '45px',
      letterSpacing: '-0.5px',

      [desktopMq]: {
        letterSpacing: '-1px',
        fontSize: '36px',
      },
    },

    '*p': {
      fontSize: '15px',
      lineHeight: 1.5,
      marginBottom: '18px',

      [desktopMq]: {
        fontSize: '16px',
      },
    },
  },
});
