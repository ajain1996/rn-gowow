import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '../Globals/constants';
import UserRegistration from '../Screens/UserRegistration/UserRegistration';
import BusinessRegistration from '../Screens/BusinessRegistration/BusinessRegistration';
import NGORegistration from '../Screens/NGORegistration/NGORegistration';
import OnBoardingLoginScreen from '../Screens/OnBoardingLoginScreen/OnBoardingLoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ScreenNames.ON_BOARDING_LOGIN_SCREEN}
        >
            <Stack.Screen
                name={ScreenNames.ON_BOARDING_LOGIN_SCREEN}
                component={OnBoardingLoginScreen}
            />
            <Stack.Screen
                name={ScreenNames.USER_REGISTRATION}
                component={UserRegistration}
            />
            <Stack.Screen
                name={ScreenNames.BUSINESS_REGISTRATION}
                component={BusinessRegistration}
            />
            <Stack.Screen
                name={ScreenNames.NGO_REGISTRATION}
                component={NGORegistration}
            />
            {/* <Stack.Screen
                name={ScreenNames.ON_BOARDING_LOGIN_SCREEN}
                component={OnBoardingLoginScreen}
            />
            <Stack.Screen
                name={ScreenNames.USER_REGISTRATION}
                component={UserRegistration}
            />
            <Stack.Screen
                name={ScreenNames.BUSINESS_REGISTRATION}
                component={BusinessRegistration}
            />
            <Stack.Screen
                name={ScreenNames.NGO_REGISTRATION}
                component={NGORegistration}
            /> */}
        </Stack.Navigator>
    );
}

export default AuthStack;
