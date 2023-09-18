import { StyleSheet } from 'react-native';
import { COLORS } from '../../Common/Colors';
import { FONTS_FAMILY } from '../../Common/FontsFamily';
import { normalize } from '../../Globals/normalize';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 15,
  },
  detailsCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  opportunitiesText: {
    fontFamily: FONTS_FAMILY.poppins_regular,
    fontSize: 16,
    color: COLORS.blackText,
  },
  opportunitiesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  flatListView: {
    marginTop: 10,
  },
  spacer15: {
    marginTop: normalize(10),
  },
  grabButton: {
    width: normalize(96),
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
});
