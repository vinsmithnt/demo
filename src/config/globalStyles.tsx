import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {color} from './colors';

const globalStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: color.themeBlack,
  },
  listContainer: {
    marginLeft: wp(5),
    paddingVertical: 20,
  },
});

export default globalStyles;
