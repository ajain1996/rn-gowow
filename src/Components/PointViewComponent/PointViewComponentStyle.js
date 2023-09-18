import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {normalize} from '../../Globals/normalize';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {font_16} from '../../Globals/fonts';

export const styles = StyleSheet.create({
  pointsContainer: {
    borderRadius: normalize(20),
    backgroundColor: COLORS.secondaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginRight: normalize(10),
    paddingVertical: normalize(5),
    justifyContent: 'center',
  },
  valueTxtStyle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '700',
    color: COLORS.secondary,
    fontSize: font_16,
    marginLeft: normalize(5),
    marginTop: normalize(2),
  },
});
