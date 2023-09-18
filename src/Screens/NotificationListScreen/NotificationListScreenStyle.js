import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import { font_10, font_12, font_16 } from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.secondaryLight,
    flex: 1,
  },
  flatListContainerStyle: {
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
    paddingBottom: normalize(10),
  },
  containerViewStyle: {
    backgroundColor: COLORS.white,
    borderRadius: normalize(12),
    padding: normalize(10),
    flexDirection: 'row',
    marginBottom: normalize(10)
  },
  imgProfile: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(20),
    marginRight: normalize(5),
  },
  titleTxtStyle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_12,
    fontWeight: '600',
    color: COLORS.black,
    flex: 1,
  },
  descTxtStyle: {
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontSize: font_10,
    fontWeight: '600',
    color: COLORS.fontGray,
  },
  txtContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  rowView: {
    flexDirection: 'row'
  },
  timeTxtStyle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_10,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  imgContainerView: {
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowColor: COLORS.black,
    elevation: 4,
  }
});
