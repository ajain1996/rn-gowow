import {StyleSheet} from 'react-native';
import {normalize} from '../../Globals/normalize';

export const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  qr: {
    height: normalize(300),
    width: normalize(300),
    resizeMode: 'contain',
  },
  button: {
    width: '90%',
  },
});
