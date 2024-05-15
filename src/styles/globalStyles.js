import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 36,
    height: 36,
  }
});

export default globalStyles;
