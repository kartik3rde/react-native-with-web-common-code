import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

import { colors, fontSize } from '../../../assets/variable'
export default StyleSheet.create({
  p: {
    fontSize: fontSize.p,
    color: colors.dark,
  },
  h1: {
    fontSize: fontSize.h1,
    color: colors.dark,
  },
  h2: {
    fontSize: fontSize.h2,
    color: colors.dark,
  }, 
  h3: {
    fontSize: fontSize.h3,
    color: colors.dark,
  },
   h4: {
    fontSize: fontSize.h4,
    color: colors.dark,
  },
  h5: {
    fontSize: fontSize.h5,
    color: colors.dark,
  },
  h6: {
    fontSize: fontSize.h6,
    color: colors.dark,
  }
});
