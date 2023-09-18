import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import OnBoardingBGView from '../../Components/OnBoardingBGView/OnBoardingBGView';
import { styles } from './OnBoardingLoginScreenStyle';
import { IMAGES } from '../../assets/Images/map';
import { Icon } from '../../Components/Icon/Icon';
import OnBoardingTextInput from '../../Components/OnBoardingTextInput/OnBoardingTextInput';
import OnBoardingButton from '../../Components/OnBoardingButton/OnBoardingButton';
import OnBoardingModalComponent from '../../Components/OnBoardingModalComponent/OnBoardingModalComponent';
import SelectRoles from '../SelectRoles/SelectRoles';
import { useNavigation } from '@react-navigation/native';
import { NavigatorsNames } from '../../Globals/constants';
import Toast from 'react-native-simple-toast';
import { Colors } from '../../styles';
import { useDispatch } from 'react-redux';
import Auth from '../../constants/Auth';
import { userLoginAPI } from '../../API/API';
import { setUser } from '../../redux/reducer/user';
import CustomLoader, { CustomPanel } from '../../Components/CustomLoader';

const OnBoardingLoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isVisibleFirstTimeUser, setIsVisibleFirstTimeUser] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsVisibleFirstTimeUser(false);
  }

  const handleClick = () => {
    if (!userName && !password) {
      Toast.show("Please enter all fields", 1000)
      return;
    }

    setLoading(true);
    console.log("\n\n handleRegisterApiRoute called");
    userLoginAPI(
      userName,
      password,
      async (result) => {
        console.log("\n\n handleRegisterApiRoute Success: ", result);
        setLoading(false);
        if (result?.statusCode === 404) {
          Toast.show(result?.message, 1000)
        }
        if (result?.statusCode === 200) {
          Toast.show('User LoggedIn Successfully!', 1000);
          await Auth.setLocalStorageData('token', result?.data?.token)
            .then(async () => {
              await Auth.setLocalStorageData('account', result?.data?.user)
                .then(() => {
                  dispatch(setUser(result?.data?.user));
                  navigation.navigate(NavigatorsNames.TAB_NAVIGATOR)
                })
                .catch((e) => {
                  Toast.show("Oops! Something went wrong", 1000)
                })
            }).catch((e) => {
              Toast.show("Oops! Something went wrong", 1000)
            })
        } else if (result?.statusCode === 400) {
          Toast.show(result?.message, 1000)
        }
      })
  }

  return (
    <OnBoardingBGView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <ScrollView style={styles.mainView}>
        <View style={styles.iconView}>
          <Icon icon={IMAGES.on_boarding_logo} style={styles.appLogoStyle} />
          <Text style={styles.welcomeText}>{'Welcome to GoWow!!'}</Text>
          <OnBoardingTextInput
            textInputTitle={'User Name'}
            placeholder={'Name'}
            value={userName}
            onChangeText={(val) => { setUserName(val) }}
          />
          <OnBoardingTextInput
            textInputTitle={'Password'}
            placeholder={'*******'}
            isSecure={true}
            value={password}
            onChangeText={(val) => { setPassword(val) }}
          />
          <OnBoardingButton
            title={'Log In'}
            onPress={handleClick}
          />
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
          <OnBoardingButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            title={'First time User?'}
            onPress={() => { }}
          />
          <OnBoardingButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            title={'Create New Account'}
            onPress={() => {
              setIsVisibleFirstTimeUser(true);
            }}
          />
        </View>
        <View style={styles.spacer} />
        <OnBoardingModalComponent
          modalClose={val => {
            setIsVisibleFirstTimeUser(val);
          }}
          title={'Select Role'}
          isVisible={isVisibleFirstTimeUser}
          modalView={styles.modalView}>
          <SelectRoles closeModal={closeModal} />
        </OnBoardingModalComponent>
      </ScrollView>
      <CustomPanel loading={loading} />
      <CustomLoader loading={loading} />
    </OnBoardingBGView>
  );
};

export default OnBoardingLoginScreen;
