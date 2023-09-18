import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorsNames } from '../Globals/constants';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SplashScreen'
        >
            <Stack.Screen
                name={NavigatorsNames.TAB_NAVIGATOR}
                component={TabNavigator}
            />
        </Stack.Navigator>
    );
}

export default AppStack;

