import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import {font_16} from '../../Globals/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  editIconStyle: {
    height: normalize(16),
    width: normalize(16),
  },
  editIconViewStyle: {
    height: normalize(25),
    width: normalize(25),
    borderRadius: normalize(13),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowColor: COLORS.black,
    elevation: 4,
  },
});
