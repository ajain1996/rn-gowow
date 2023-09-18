import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {normalize} from '../../Globals/normalize';
import { font_16 } from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.secondaryLight,
    flex: 1,
  },
  profileContainerView: {
    backgroundColor: COLORS.secondary,
    margin: normalize(10),
    marginTop: normalize(20),
    borderRadius: normalize(20),
  },
  profileView: {
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(50),
    borderColor: COLORS.white,
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: normalize(10),
  },
  txtNameStyle: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontSize: font_16,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: normalize(10),
  },
  editIconStyle: {
    height: normalize(16),
    width: normalize(16),
  },
  editIconViewStyle: {
    height: normalize(25),
    width: normalize(25),
    borderRadius: normalize(13),
    backgroundColor: COLORS.white,
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
    position: 'absolute',
    bottom: normalize(0),
    right: normalize(5)
  },
  imageContainer: {
    height: normalize(100),
    width: normalize(100),
    alignSelf: 'center',
    marginTop: normalize(15),
    marginBottom: normalize(10)
  },
  btnOptionView: {
    backgroundColor: COLORS.white,
    margin: normalize(10),
    borderRadius: normalize(10),
    marginVertical: normalize(5),
    padding: normalize(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  customViewStyle: {
    height: normalize(32),
    width: normalize(32),
    borderRadius: normalize(16),
  },
  customIconStyle: {
    height: normalize(20),
    width: normalize(20),
  },
  txtMyProfile: {
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontSize: font_16,
    fontWeight: '500',
    color: COLORS.black,
    marginLeft: normalize(10),
    flex: 1,
  },
  rightArrowStyle: {
    height: normalize(20),
    width: normalize(20),
    marginRight: normalize(5),
  },
  flatListStyle: {
    paddingBottom: normalize(30),
  }
});
