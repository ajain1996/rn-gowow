import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import scale, {verticalScale} from '../Globals/scale';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import {NavigatorsNames, ScreenNames} from '../Globals/constants';
import {IMAGES} from '../assets/Images/map';
import {COLORS} from '../Common/Colors';
import {font_10, font_11} from '../Globals/fonts';
import {FONTS_FAMILY} from '../Common/FontsFamily';
import {Icon} from '../Components/Icon/Icon';
import {normalize} from '../Globals/normalize';
import NgoScreen from '../Screens/NgoScreen/NgoScreen';
import GetWowScreen from '../Screens/GetWowScreen/GetWowScreen';
import BeWowScreen from '../Screens/BeWowScreen/BeWowScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import TopNgosScreen from '../Screens/TopNgosScreen/TopNgosScreen';
import HomeNavigator from './HomeNavigator';

// Tab Navigator
const TabNavigator = props => {
  const Tab = createBottomTabNavigator();

  const renderIcon = name => {
    switch (name) {
      case ScreenNames.HOME_SCREEN:
        return IMAGES.home_icon;
      case ScreenNames.NGO_SCREEN:
        return IMAGES.ngo_bottom_icon;
      case ScreenNames.GET_WOW_SCREEN:
        return IMAGES.get_wow_icon;
      case ScreenNames.BE_WOW_SCREEN:
        return IMAGES.be_wow_icon;
      case ScreenNames.PROFILE_SCREEN:
        return IMAGES.profile_icon;
      default:
        return IMAGES.home_icon;
    }
  };

  const TabBarIcon = (focused, name) => {
    return (
      <View>
        <View style={styles.normalContainer}>
          <Icon
            icon={renderIcon(name)}
            style={focused ? styles.focusIconStyle : styles.iconStyle}
            iconColor={focused ? COLORS.secondary : COLORS.lightGray}
          />
        </View>
        <Text style={focused ? styles.focusTxtStyle : styles.normalTxtStyle}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={NavigatorsNames.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return TabBarIcon(focused, ScreenNames.HOME_SCREEN);
          },
        })}
      />
      <Tab.Screen
        name={'NgoScreen'}
        component={NgoScreen}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return TabBarIcon(focused, ScreenNames.NGO_SCREEN);
          },
        })}
      />
      <Tab.Screen
        name={'GetWoWScreen'}
        component={GetWowScreen}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return TabBarIcon(focused, ScreenNames.GET_WOW_SCREEN);
          },
        })}
      />
      <Tab.Screen
        name={'BeWow'}
        component={BeWowScreen}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return TabBarIcon(focused, ScreenNames.BE_WOW_SCREEN);
          },
        })}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return TabBarIcon(focused, ScreenNames.PROFILE_SCREEN);
          },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusIconStyle: {
    height: verticalScale(20),
    width: verticalScale(20),
    tintColor: COLORS.secondary,
  },
  iconStyle: {height: verticalScale(20), width: verticalScale(20)},
  tabBarStyle: {
    height: normalize(50),
    paddingTop: normalize(12),
    marginTop: normalize(2),
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowColor: COLORS.black,
    elevation: 4,
    borderColor: COLORS.black,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  normalContainer: {
    width: scale(70),
    borderRadius: 7,
    paddingHorizontal: scale(10),
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  normalTxtStyle: {
    color: COLORS.black,
    marginTop: 5,
    fontSize: font_10,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  focusTxtStyle: {
    color: COLORS.secondary,
    marginTop: 5,
    fontSize: font_10,
    fontFamily: FONTS_FAMILY.poppins_medium,
    fontWeight: '500',
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
});

export default TabNavigator;
