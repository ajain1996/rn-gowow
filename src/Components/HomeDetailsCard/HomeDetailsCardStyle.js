import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
export const styles = StyleSheet.create({
  mainView: {
    borderRadius: 6,
    width: '30%',
    backgroundColor: COLORS.white,

    padding: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  count: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: 16,
    color: COLORS.secondary,
  },
  title: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: 12,
    color: COLORS.blackText,
    marginTop: 5,
  },
  textView: {
    marginTop: 15,
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationButton: {
    backgroundColor: COLORS.white,
    height: normalize(30),
    width: normalize(30),
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'absolute',
    right: 0,
  },
});
