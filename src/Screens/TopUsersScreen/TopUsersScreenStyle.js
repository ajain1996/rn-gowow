import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import { normalize } from '../../Globals/normalize';
export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.secondaryLight,
    flex: 1,
  },
  flatListStyle: {
    marginHorizontal: normalize(10),
    marginTop: normalize(10)
  }
});
