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
  cardContainerView: {
    flex: 1,
    marginHorizontal: normalize(5),
    marginVertical: normalize(5),
    height: normalize(140),
    backgroundColor: COLORS.white,
    borderRadius: normalize(20)
  },
  businessImage: {
    width: '100%',
    height: '50%',
    borderRadius: normalize(20),
  },
  txtBusinessName: {
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontWeight: '500',
    color: COLORS.black,
    fontSize: font_12,
    textAlign: 'center',
    marginTop: normalize(10),
  },
  containerViewStyle: {
    marginTop: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: normalize(10),
  },
  customPointsContainer: {
    paddingHorizontal: normalize(25),
    alignSelf: 'center',
  }
});
