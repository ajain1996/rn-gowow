import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import { normalize } from '../../Globals/normalize';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderRadius: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: normalize(45)
  },
  input: {
    fontSize: 16,
    paddingLeft: 15,
    paddingVertical: 12,
    color: COLORS.blackText,
    fontFamily: FONTS_FAMILY.poppins_regular,
    flex: 1,
  },
  searchIcon: {
    height: 18,
    width: 18,
  },
  searchView: {
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 15,
  },
  searchInfo: {
    fontSize: 12,
    color: COLORS.white,
    marginTop: 15,
  },
  filterIconContainer: {
    backgroundColor: COLORS.white,
    borderRadius: normalize(9),
    marginLeft: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(50),
  },
  rowViewContainer: {
    flexDirection: 'row',
  },
  filterIconStyle: {
    height: normalize(25),
    width: normalize(25),
  }
});
