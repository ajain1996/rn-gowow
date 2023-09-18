import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {normalize} from '../../Globals/normalize';
import {FONTS_FAMILY} from '../../Common/FontsFamily';
import {font_12, font_16} from '../../Globals/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: normalize(10),
    borderRadius: normalize(20),
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  purpleView: {
    height: '100%',
    width: normalize(50),
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: normalize(20),
    borderBottomLeftRadius: normalize(20),
  },
  profileImageStyle: {
    width: normalize(58),
    height: normalize(58),
    borderRadius: normalize(30),
    marginLeft: -normalize(30),
    backgroundColor: COLORS.white,
    marginVertical: normalize(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtUserName: {
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    color: COLORS.black,
    fontSize: font_12,
    marginLeft: normalize(10),
    flex: 1,
  },
});
