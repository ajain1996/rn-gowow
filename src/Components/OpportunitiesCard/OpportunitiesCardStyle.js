import { StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { normalize } from '../../Globals/normalize';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
export const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: '22%',
    backgroundColor: COLORS.white,

    padding: 5,
    paddingTop: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: COLORS.secondaryLight,
    height: normalize(38),
    width: normalize(38),
    borderRadius: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: normalize(28),
    width: normalize(28),
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: "500",
    fontSize: 12,
    color: COLORS.blackText,
    marginTop: 10,
    marginBottom: 8,
    textAlign: "center"
  },
});
