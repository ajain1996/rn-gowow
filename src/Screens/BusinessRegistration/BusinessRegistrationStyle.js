import {StyleSheet} from 'react-native';
import {verticalScale} from '../../Globals/scale';
import {COLORS} from '../../Common/Colors';
import {normalize} from '../../Globals/normalize';
export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: verticalScale(15),
    marginVertical: verticalScale(30),
    backgroundColor: COLORS.white,
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(30),
    borderRadius: 20,
  },
  headerContainer: {
    borderRadius: normalize(20),
  },
  iconView: {padding: verticalScale(15)},
  spacer: {
    marginVertical: normalize(10),
  },
});
