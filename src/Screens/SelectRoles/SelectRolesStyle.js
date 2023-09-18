import {StyleSheet} from 'react-native';
import {verticalScale} from '../../Globals/scale';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {
  font_11,
  font_12,
  font_14,
  font_16,
  font_18,
  font_20,
} from '../../Globals/fonts';
import {normalize} from '../../Globals/normalize';
export const styles = StyleSheet.create({
  welcomeTextView: {
    paddingHorizontal: verticalScale(50),
    paddingTop: verticalScale(25),
  },
  welcomeText: {
    color: COLORS.blackText,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_18,
    textAlign: 'center',
  },
  subText: {
    color: COLORS.lightGray,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontSize: font_12,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  roleCard: {
    backgroundColor: COLORS.secondaryLight,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: normalize(30),
    width: normalize(30),
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
    height: normalize(20),
    width: normalize(20),
  },
  textView: {
    justifyContent: 'center',
    marginLeft: normalize(15),
    width: '75%',
  },
  role: {
    fontFamily: FONTS_FAMILY.poppins_bold,
    color: COLORS.blackText,
    fontSize: font_14,
  },
  roleSubText: {
    fontFamily: FONTS_FAMILY.poppins_regular,
    color: COLORS.lightGray,
    fontSize: font_11,
    marginTop: 2,
  },
  mainView: {
    paddingBottom: 25,
  },
});
