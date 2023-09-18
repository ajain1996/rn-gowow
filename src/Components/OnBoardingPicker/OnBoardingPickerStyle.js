import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {font_14} from '../../Globals/fonts';
import {verticalScale} from '../../Globals/scale';
import {normalize} from '../../Globals/normalize';

export const styles = StyleSheet.create({
  dropdownStyle: {
    backgroundColor: COLORS.grayTextInput,
    borderColor: COLORS.grayTextInput,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_14,
    color: COLORS.grayPlaceHolder,
  },
  placeholderStyle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_14,
    color: COLORS.grayPlaceHolder,
  },
  containerStyle: {
    backgroundColor: COLORS.grayTextInput,
    borderColor: COLORS.grayTextInput,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS_FAMILY.poppins_bold,
    fontSize: verticalScale(16),
    marginBottom: normalize(5),
  },
});
