import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {verticalScale} from '../../Globals/scale';
import {normalize} from '../../Globals/normalize';
import { font_16 } from '../../Globals/fonts';
import { FONTS_FAMILY } from '../../Common/FontsFamily';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: normalize(10),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 38,
    width: 78,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    backgroundColor: COLORS.white,
    height: normalize(30),
    width: normalize(30),
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(10),
    shadowColor: COLORS.shadow,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
  },
  notification: {
    height: normalize(24),
    width: normalize(24),
  },
  appLogoStyle: {
    height: verticalScale(80),
    width: verticalScale(80),
  },
  user: {
    height: normalize(30),
    width: normalize(30),
    borderRadius: normalize(15),
  },
  txtTitleStyle: {
    color: COLORS.black,
    fontSize: font_16,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
    marginRight: normalize(40)
  },
  subContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(20),
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
  backIconStyle: {
    height: normalize(25),
    width: normalize(25),
  },
  mainViewBack: {
    backgroundColor: COLORS.secondaryLight,
    paddingHorizontal: normalize(10),
  }
});
