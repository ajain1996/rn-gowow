import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {verticalScale} from '../../Globals/scale';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: verticalScale(15),
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
});
