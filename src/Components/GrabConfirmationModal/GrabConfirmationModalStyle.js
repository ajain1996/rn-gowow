import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {normalize} from '../../Globals/normalize';
import {
  ScreenHeight,
  ScreenWidth,
  font_12,
  font_15,
  font_24,
} from '../../Globals/fonts';
import {FONTS_FAMILY} from '../../Common/FontsFamily';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: normalize(20),
    alignItems: 'center',
  },
  modalStyle: {
    height: ScreenHeight,
    width: ScreenWidth,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: COLORS.modalBackground,
  },
  correctIconStyle: {
    height: normalize(100),
    width: normalize(100),
    marginTop: normalize(25),
  },
  txtConfirmGrab: {
    color: COLORS.blackText,
    fontSize: font_24,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: normalize(10),
  },
  confirmTxtStyle: {
    color: COLORS.black,
    fontSize: font_12,
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: normalize(10),
    width: '70%',
    textAlign: 'center',
  },
  btnDoneStyle: {
    height: normalize(40),
    width: normalize(140),
    backgroundColor: COLORS.secondary,
    borderRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalize(20)
  },
  txtDoneStyle: {
    color: COLORS.white,
    fontSize: font_15,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
