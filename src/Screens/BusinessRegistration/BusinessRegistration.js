import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import OnBoardingBGView from '../../Components/OnBoardingBGView/OnBoardingBGView';
import OnBoardingButton from '../../Components/OnBoardingButton/OnBoardingButton';
import OnBoardingPicker from '../../Components/OnBoardingPicker/OnBoardingPicker';
import {styles} from './BusinessRegistrationStyle';
import OnBoardingTextInput from '../../Components/OnBoardingTextInput/OnBoardingTextInput';
import OnBoardingHeader from '../../Components/OnBoardingHeader/OnBoardingHeader';
import {CITY, YOUR_ROLES} from '../SelectRoles/data';
import OnBoardingModalComponent from '../../Components/OnBoardingModalComponent/OnBoardingModalComponent';
import GenerateQR from '../GenerateQR/GenerateQR';
import {useNavigation} from '@react-navigation/native';

const BusinessRegistration = () => {
  const [isVisibleGenerateQR, setIsVisibleGenerateQR] = useState(false);
  const navigation = useNavigation();
  return (
    <OnBoardingBGView>
      <ScrollView style={styles.mainView}>
        <OnBoardingHeader
          onPress={() => navigation.goBack()}
          isBackEnable={true}
          title={'Business Registration'}
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
          <OnBoardingTextInput
            textInputTitle={'Category'}
            placeholder={'Category'}
          />
          <OnBoardingTextInput
            textInputTitle={'Discount%'}
            placeholder={'Discount'}
          />
          <OnBoardingTextInput
            textInputTitle={'Minimum Bill Amount'}
            placeholder={'Minimum Bill Amount'}
          />
          <OnBoardingButton
            title={'Create'}
            onPress={() => setIsVisibleGenerateQR(true)}
          />
          <View style={styles.spacer} />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
      <OnBoardingModalComponent
        modalClose={val => {
          setIsVisibleGenerateQR(val);
        }}
        title={'Generate QR'}
        isVisible={isVisibleGenerateQR}
        modalView={styles.modalView}>
        <GenerateQR closeModal={() => setIsVisibleGenerateQR(false)} />
      </OnBoardingModalComponent>
    </OnBoardingBGView>
  );
};

export default BusinessRegistration;
