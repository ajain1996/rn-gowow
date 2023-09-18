import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import OnBoardingBGView from '../../Components/OnBoardingBGView/OnBoardingBGView';
import OnBoardingButton from '../../Components/OnBoardingButton/OnBoardingButton';
import OnBoardingPicker from '../../Components/OnBoardingPicker/OnBoardingPicker';
import { styles } from './UserRegistrationStyle';
import OnBoardingTextInput from '../../Components/OnBoardingTextInput/OnBoardingTextInput';
import OnBoardingHeader from '../../Components/OnBoardingHeader/OnBoardingHeader';
import { useNavigation } from '@react-navigation/native';
import { NavigatorsNames, ScreenNames } from '../../Globals/constants';
import { CITY, YOUR_ROLES } from '../SelectRoles/data';
import Toast from 'react-native-simple-toast';
import { userRegisterAPI } from '../../API/API';
import Auth from '../../constants/Auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import CustomLoader, { CustomPanel } from '../../Components/CustomLoader';

const UserRegistration = ({ navigation }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [nameOfUser, setNameOfUser] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!role && !mobile && !city && !userName && !password) {
      Toast.show("Please enter all fields", 1000)
      return;
    }

    setLoading(true);
    console.log("\n\n handleRegisterApiRoute called");
    userRegisterAPI(
      role,
      "NGO1",
      mobile,
      city,
      "",
      "",
      userName,
      password,
      async (result) => {
        console.log("\n\n handleRegisterApiRoute Success: ", result);
        setLoading(false);
        if (result?.statusCode === 404) {
          Toast.show(result?.message, 1000)
        }
        if (result?.statusCode === 200) {
          Toast.show('User Register Successfully!', 1000);
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
      <ScrollView style={styles.mainView}>
        <OnBoardingHeader
          onPress={() => navigation.goBack()}
          isBackEnable={true}
          title={'User Registration'}
          customMainViewBack={styles.headerContainer}
        />
        <View style={styles.iconView}>
          <OnBoardingPicker
            textInputTitle={'Your Role'}
            items={YOUR_ROLES}
            onChangeValue={(val) => { setRole(val); }}
          />

          <OnBoardingTextInput
            textInputTitle={'Name Of User'}
            placeholder={'User Name'}
            value={nameOfUser}
            onChangeText={(val) => { setNameOfUser(val) }}
          />

          <OnBoardingTextInput
            textInputTitle={'Username'}
            placeholder={'User Name'}
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
          <OnBoardingTextInput
            textInputTitle={'Mobile No'}
            placeholder={'Mobile No'}
            value={mobile}
            onChangeText={(val) => { setMobile(val) }}
          />
          <View style={styles.spacer} />
          <OnBoardingPicker
            textInputTitle={'City'}
            items={CITY}
            onChangeValue={(val) => { setCity(val); }}
          />
          <OnBoardingButton
            title={'Create'}
            onPress={handleClick}
          />
          <View style={styles.spacer} />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
      <CustomPanel loading={loading} />
      <CustomLoader loading={loading} />
    </OnBoardingBGView>
  );
};

export default UserRegistration;
