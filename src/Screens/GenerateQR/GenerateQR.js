import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '../../Components/Icon/Icon';
import {IMAGES} from '../../assets/Images/map';
import {styles} from './GenerateQRStyle';
import OnBoardingButton from '../../Components/OnBoardingButton/OnBoardingButton';
import {useNavigation} from '@react-navigation/native';
import {NavigatorsNames} from '../../Globals/constants';

const GenerateQR = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <Icon icon={IMAGES.generate_qr} style={styles.qr} />
      <OnBoardingButton
        buttonStyle={styles.button}
        title={'Download'}
        onPress={() => {
          props.closeModal();
          navigation.navigate(NavigatorsNames.TAB_NAVIGATOR);
        }}
      />
    </View>
  );
};

export default GenerateQR;
