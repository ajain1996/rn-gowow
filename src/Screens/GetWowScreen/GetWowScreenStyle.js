import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import { font_12, font_16 } from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainCotainer: {
    flex: 1,
    backgroundColor: COLORS.secondaryLight,
  },
  searchBarContainer: {
    marginHorizontal: normalize(10),
  },
  btnScanAndRedeem: {
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(5),
    borderRadius: normalize(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBusiness: {
    color: COLORS.blackText,
    fontSize: font_16,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '400',
  },
  titleAndButtonContainer: {
    marginTop: normalize(15),
    flexDirection: 'row',
    paddingHorizontal: normalize(12),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scanIcon: {
    height: normalize(15),
    width: normalize(15),
    marginRight: normalize(5),
    marginLeft: normalize(5),
  },
  scanTextStyle: {
    color: COLORS.white,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '600',
  },
  businessCardStyle: {
    backgroundColor: COLORS.white,
    padding: normalize(5),
    borderRadius: normalize(12),
    marginHorizontal: normalize(10),
    marginVertical: normalize(5),
    shadowColor: COLORS.shadow,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
  },    
  imgBusiness: {
    height: normalize(120),
    borderRadius: normalize(12),
  },
  txtNameStyle: {
    marginLeft: normalize(10),
    color: COLORS.blackText,
    fontSize: font_16,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    marginTop: normalize(10),
  },
  viewMapStyle: {
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10)
  },    
  txtViewMapStyle: {
    color: COLORS.white,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '600',
  },
  containerViewMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtLeftStyle: {
    color: COLORS.secondary,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    marginTop: normalize(10),
    marginLeft: normalize(10),
  },
  verticalLineStyle: {
    height: normalize(80),
    width: 1,
    backgroundColor: COLORS.fontGray,
    marginTop: normalize(15),
    marginLeft: normalize(20),
  },
  rowViewStyle: {
    flexDirection: 'row',
  },
  txtRightStyle: {
    color: COLORS.black,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    marginTop: normalize(10),
    marginLeft: normalize(25),
    flex: 1,
  }
});