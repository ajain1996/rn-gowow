import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
import { verticalScale } from '../../Globals/scale';

export const styles = StyleSheet.create({
  mainView: {
    marginTop: 25,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.poppins_bold,
    fontSize: verticalScale(16),
  },
  textInput: {
    backgroundColor: COLORS.grayTextInput,
    borderRadius: verticalScale(8),
    padding: Platform.OS == 'android' ? verticalScale(11) : verticalScale(16),
    marginTop: Platform.OS == 'ios' ? verticalScale(10) : verticalScale(8),
    fontFamily: FONTS_FAMILY.poppins_medium,
    color: "#000"
  },
});
