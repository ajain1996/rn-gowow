import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';
import TopUsersScreen from '../Screens/TopUsersScreen/TopUsersScreen';
import { NavigatorsNames, ScreenNames } from '../Globals/constants';
import OnBoardingLoginScreen from '../Screens/OnBoardingLoginScreen/OnBoardingLoginScreen';
import UserRegistration from '../Screens/UserRegistration/UserRegistration';
import BusinessRegistration from '../Screens/BusinessRegistration/BusinessRegistration';
import NGORegistration from '../Screens/NGORegistration/NGORegistration';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../constants/Auth';
import { setUser } from '../redux/reducer/user';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();
const RootNavigator = () => {

  const dispatch = useDispatch();

  const { login } = useSelector((state: any) => state.User);

  const [loginChk, setLoginChk] = useState(true);

  useEffect(() => { getUser() }, []);

  const getUser = async () => {
    let data = await Auth.getAccount();
    if (data !== null) {
      Auth.setLocalStorageData('account', data)
      dispatch(setUser(data));
      setLoginChk(false);
    } else {
      console.log('Need to login');
      setLoginChk(false);
    }
  };

  if (loginChk) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens={false}
        initialRouteName="Auth"
        screenOptions={{
          cardStyle: { backgroundColor: "#FFF" },
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        {/* <Stack.Screen name="AppStack" component={AppStack} /> */}
        {!login ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="AppStack" component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    // <Stack.Navigator
    //     initialRouteName={ScreenNames.ON_BOARDING_LOGIN_SCREEN}
    //     screenOptions={{headerShown: false}}>
    // <Stack.Screen
    //   name={ScreenNames.ON_BOARDING_LOGIN_SCREEN}
    //   component={OnBoardingLoginScreen}
    // />
    // <Stack.Screen
    //   name={ScreenNames.USER_REGISTRATION}
    //   component={UserRegistration}
    // />
    // <Stack.Screen
    //   name={ScreenNames.BUSINESS_REGISTRATION}
    //   component={BusinessRegistration}
    // />
    // <Stack.Screen
    //   name={ScreenNames.NGO_REGISTRATION}
    //   component={NGORegistration}
    // />
    // <Stack.Screen
    //   name={NavigatorsNames.TAB_NAVIGATOR}
    //   component={TabNavigator}
    // />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RootNavigator;
