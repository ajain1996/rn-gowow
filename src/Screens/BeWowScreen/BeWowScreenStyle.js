import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import scale, { verticalScale } from '../../Globals/scale';
import { font_12, font_16 } from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.secondary,
  },
  headerContainer: {
    backgroundColor: COLORS.secondary,
  },
  belowHeaderView: {
    backgroundColor: COLORS.secondary,
    height: verticalScale(130),
    width: '100%',
  },
  star1IconStyle: {
    height: verticalScale(100),
    width: verticalScale(100),
    position: 'absolute',
    top: -verticalScale(100),
  },
  star2IconStyle: {
    height: verticalScale(70),
    width: verticalScale(70),
    position: 'absolute',
    top: -verticalScale(50),
    right: verticalScale(20),
  },
  whiteContainer: {
    backgroundColor: COLORS.white,
    borderRadius: normalize(11),
    paddingBottom: normalize(1),
    paddingHorizontal: normalize(1),
    justifyContent: 'center',
    shadowRadius: 6,
    shadowOffset: {
      width: -3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowColor: COLORS.black,
    elevation: 4,
    marginTop: -normalize(40),
  },
  secondWhiteContainer: {
    width: scale(100),
    height: verticalScale(110),
    marginTop: -normalize(60),
    justifyContent: 'space-between'
  },  
  valueContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: normalize(12),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  secondValueContainer: {
    justifyContent: 'flex-end',
  },  
  cardContainerView: {
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valueTxtStyle: {
    paddingVertical: normalize(4),
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '600',
    color: COLORS.white,
    fontSize: font_12,
    textAlign: 'center',
  },
  titleTxtStyle: {
    marginHorizontal: normalize(20),
    marginTop: normalize(10),
    marginBottom: normalize(20),
    textAlign: 'center',
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    color: COLORS.black,
    fontSize: font_12,
  },
  secondTxtStyle: {
    marginBottom: normalize(10),
  },  
  awardIconStyle: {
    height: normalize(30),
    width: normalize(30),
  },
  badgeStyle: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: normalize(20),
    padding: normalize(5),
    marginTop: -normalize(20),
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowColor: COLORS.black,
    elevation: 4,
  },
  secondBadgeStyle: {
    padding: normalize(10),
    borderRadius: normalize(30),
    marginTop: -normalize(25),
  },
  userConatinerView: {
    marginTop: normalize(10),
  },
  viewAllBTNStyle: {
    backgroundColor: COLORS.secondary,
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
    padding: normalize(10),
    alignItems: 'center',
    borderRadius: normalize(12)
  },
  btnTxtStyle: {
    textAlign: 'center',
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '600',
    color: COLORS.white,
    fontSize: font_16
  }
});
