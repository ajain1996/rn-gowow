import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {normalize} from '../../Globals/normalize';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
export const styles = StyleSheet.create({
  mainView: {
    width: '48%',
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
  },
  header: {
    height: normalize(40),
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: normalize(15),
    bottom: 30,
  },
  name: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: normalize(12),
    color: COLORS.blackText,
    textAlign: 'center',
    bottom: 10,
  },
  icon: {
    height: normalize(28),
    width: normalize(28),
    alignSelf: 'center',
    marginRight: 10,
  },
  cashView: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: COLORS.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    borderRadius: normalize(20),
    paddingHorizontal: 25,
  },
  amount: {
    fontFamily: FONTS_FAMILY.poppins_bold,
    fontSize: normalize(15),
    color: COLORS.secondary,
    textAlign: 'center',
  },
  containerView: {
    flex: 1,
    paddingLeft: normalize(7),
  },
});
