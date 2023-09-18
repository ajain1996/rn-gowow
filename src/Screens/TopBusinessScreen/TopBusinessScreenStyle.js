import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import { font_16 } from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.secondaryLight,
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    marginHorizontal: normalize(10),
    marginTop: normalize(10)
  }
});
