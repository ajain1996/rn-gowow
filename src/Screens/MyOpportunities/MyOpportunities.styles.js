import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.secondaryLight,

  },
  flatListView: {
    marginTop: normalize(10),
    marginHorizontal: normalize(10),
    flex: 1,
  },
  contentStyle: {
    flexGrow: 1,
    paddingBottom: normalize(10)
  },
});
