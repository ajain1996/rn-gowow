import {View, ScrollView} from 'react-native';
import React from 'react';
import OnBoardingBGView from '../../Components/OnBoardingBGView/OnBoardingBGView';
import OnBoardingButton from '../../Components/OnBoardingButton/OnBoardingButton';
import OnBoardingPicker from '../../Components/OnBoardingPicker/OnBoardingPicker';
import {styles} from './NGORegistrationStyle';
import OnBoardingTextInput from '../../Components/OnBoardingTextInput/OnBoardingTextInput';
import OnBoardingHeader from '../../Components/OnBoardingHeader/OnBoardingHeader';
import {CITY, YOUR_ROLES} from '../SelectRoles/data';
import {useNavigation} from '@react-navigation/native';
import {NavigatorsNames} from '../../Globals/constants';

const NGORegistration = () => {
  const navigation = useNavigation();
  return (
    <OnBoardingBGView>
      <ScrollView style={styles.mainView}>
        <OnBoardingHeader
          onPress={() => navigation.goBack()}
          isBackEnable={true}
          title={'NGO Registration'}
          customMainViewBack={styles.headerContainer}
        />
        <View style={styles.iconView}>
          <View style={styles.spacer} />
          <OnBoardingPicker textInputTitle={'Your Role'} items={YOUR_ROLES} />
          <OnBoardingTextInput
            textInputTitle={'User Name'}
            placeholder={'Name'}
          />
          <OnBoardingTextInput
            textInputTitle={'Name Of Business'}
            placeholder={'Business Name'}
          />
          <OnBoardingTextInput
            textInputTitle={'Username'}
            placeholder={'User Name'}
          />
          <OnBoardingTextInput
            textInputTitle={'Password'}
            placeholder={'*******'}
            isSecure={true}
          />
          <OnBoardingTextInput
            textInputTitle={'Mobile No'}
            placeholder={'Mobile No'}
          />
          <View style={styles.spacer} />
          <OnBoardingPicker
            textInputTitle={'City'}
            items={CITY}
            dropDownDirection="TOP"
          />
          <View style={styles.spacer} />
          <OnBoardingPicker textInputTitle={'Location'} items={CITY} />
          <OnBoardingTextInput
            textInputTitle={'Adddress'}
            placeholder={'Adddress'}
          />
          <OnBoardingButton
            title={'Create'}
            onPress={() => navigation.navigate(NavigatorsNames.TAB_NAVIGATOR)}
          />
          <View style={styles.spacer} />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </OnBoardingBGView>
  );
};

export default NGORegistration;
