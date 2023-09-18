import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import TopUsersScreen from '../Screens/TopUsersScreen/TopUsersScreen';
import NotificationListScreen from '../Screens/NotificationListScreen/NotificationListScreen';
import { ScreenNames } from '../Globals/constants';
import TopNgosScreen from '../Screens/TopNgosScreen/TopNgosScreen';
import MyOpportunities from '../Screens/MyOpportunities/MyOpportunities';
import TopBusinessScreen from '../Screens/TopBusinessScreen/TopBusinessScreen';
import FeedDetailScreen from '../Screens/FeedDetailScreen/FeedDetailScreen';
import AddOpportunity from '../Screens/addOpportunity/AddOpportunity';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.NOTIFICATION_SCREEN}
        component={NotificationListScreen}
      />
      <Stack.Screen
        name={ScreenNames.TOP_USER_SCREEN}
        component={TopUsersScreen}
      />
      <Stack.Screen
        name={ScreenNames.TOP_NGO_SCREEN}
        component={TopNgosScreen}
      />
      <Stack.Screen
        name={ScreenNames.MY_OPPORTUNITIES}
        component={MyOpportunities}
      />
      <Stack.Screen
        name={ScreenNames.TOP_BUSINESS_SCREEN}
        component={TopBusinessScreen}
      />
      <Stack.Screen
        name={ScreenNames.FEED_DETAIL_SCREEN}
        component={FeedDetailScreen}
      />
      <Stack.Screen
        name={ScreenNames.ADD_NEW_OPPORTUNITY}
        component={AddOpportunity}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
