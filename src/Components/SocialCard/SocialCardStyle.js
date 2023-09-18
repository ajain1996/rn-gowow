import { StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { normalize } from '../../Globals/normalize';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
export const styles = StyleSheet.create({
  mainView: {
    borderRadius: 12,
    width: '100%',
    backgroundColor: COLORS.white,

    padding: 15,
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
    marginTop: 10,
  },
  foundationView: {
    flexDirection: 'row',
  },
  foundationIcon: {
    height: 54,
    width: 54,
    alignSelf: 'center',
    // right: 10,
    borderRadius: 100,
  },
  foundationTextView: {
    alignSelf: 'center',
    marginLeft: 15,
  },
  foundationTitle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.blackText,
  },
  commentText: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: 10,
    color: COLORS.blackText,
    alignSelf: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  foundationDate: {
    color: COLORS.lightGray,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: 10,
    marginTop: -2
  },
  subView: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: normalize(150),
    borderRadius: 12
  },
  footerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  likeIcon: {
    height: normalize(18),
    width: normalize(18),
    alignSelf: 'center',
  },
  grabButton: {
    width: normalize(89),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  grabText: {
    fontSize: normalize(10),
    color: COLORS.white,
    fontFamily: FONTS_FAMILY.poppins_medium,
    textAlign: 'center',
    marginTop: 4
  },
});
