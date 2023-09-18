import { StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { verticalScale } from '../../Globals/scale';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
import { Colors, Styles } from '../../styles';
export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: verticalScale(15),
    marginVertical: verticalScale(30),
    backgroundColor: COLORS.white,
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(30),
    borderRadius: 20,
  },
  appLogoStyle: {
    height: verticalScale(80),
    width: verticalScale(160),
    alignSelf: 'center',
  },
  iconView: { padding: verticalScale(15) },
  welcomeText: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    textAlign: 'center',
    marginTop: verticalScale(15),
    color: COLORS.blackText,
    fontSize: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  forgotPassText: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: verticalScale(14),
    textAlign: 'center',
    color: COLORS.secondary,
    marginVertical: verticalScale(25),
  },
  spacer: {
    marginVertical: verticalScale(25),
  },

  buttonStyle: {
    marginTop: verticalScale(5),
    backgroundColor: COLORS.white,
    borderRadius: verticalScale(12),
    borderWidth: 0.7,
    borderColor: COLORS.secondary,
    marginBottom: verticalScale(10),
  },
  textStyle: {
    color: COLORS.secondary,
  },
  modalView: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    width: '100%',
    padding: verticalScale(25),
    borderRadius: verticalScale(20),
  },
  stepOne: {
    width: 32, height: 32,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    ...Styles.centered
  },
  stepOneText: {
    fontSize: 9,
    color: Colors.primary,
    fontWeight: "600"
  },
  stepOneSelected: {
    width: 32, height: 32,
    backgroundColor: "#DEE2E3",
    borderRadius: 100,
    ...Styles.centered
  },
  stepOneTextSelected: {
    fontSize: 9,
    color: "#8C898D",
    fontWeight: "600"
  }
});
