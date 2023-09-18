import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {verticalScale} from '../../Globals/scale';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    marginTop: verticalScale(40),
    padding: verticalScale(15),
    borderRadius: verticalScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: FONTS_FAMILY.poppins_bold,
    color: COLORS.white,
    fontSize: verticalScale(16),
  },
});
