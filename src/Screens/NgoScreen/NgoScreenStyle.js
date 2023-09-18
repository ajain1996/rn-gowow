import { StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
import { normalize } from '../../Globals/normalize';
import { font_10, font_12, font_9 } from '../../Globals/fonts';
import scale from '../../Globals/scale';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.secondaryLight,
  },
  searchBarContainer: {
    marginHorizontal: normalize(10),
    marginTop: normalize(15),
  },
  whiteWrapperView: {
    backgroundColor: COLORS.white,
    borderRadius: normalize(20),
    marginBottom: normalize(10),
    flexDirection: 'row',
    paddingVertical: normalize(5),
    paddingLeft: normalize(5),
    alignItems: "center"
  },
  ngoIconStyle: {
    width: 110,
    height: 110,
  },
  flatListContainerStyle: {
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
    paddingBottom: normalize(10),
  },
  txtNameStyle: {
    color: COLORS.blackText,
    marginTop: normalize(3),
    fontSize: 12,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    width: scale(210),
  },
  conatinerNameAndAddress: {
    marginLeft: normalize(10),
  },
  customPinStyle: {
    height: normalize(16),
    width: normalize(16),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: normalize(5),
  },
  txtAddressStyle: {
    color: COLORS.black,
    fontSize: 9,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    width: scale(195),
    marginLeft: normalize(5),
    marginTop: normalize(2),
  },
  btnViewMap: {
    alignSelf: 'flex-end',
    marginTop: -normalize(15),
    marginBottom: normalize(3),
    backgroundColor: COLORS.secondary,
    padding: normalize(5),
    borderRadius: normalize(6),
    marginRight: normalize(5),
    width: normalize(70),
    height: normalize(25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtViewMapStyle: {
    color: COLORS.white,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '600',
  }
});
