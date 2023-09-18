import React, { useContext, useState } from 'react';
import {
  StatusBar,
  AppState,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import RootNavigator from './RootNavigator/RootNavigator';
import { COLORS } from './Common/Colors';
import { GlobalContext } from './Globals/globalProvider';
import _ from 'lodash';
import { verticalScale } from './Globals/scale';
import { Icon } from './Components/Icon/Icon';
import { Colors } from './styles';

const FirstScreen = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const contextData = useContext(GlobalContext);
  const statusBarColor = _.get(contextData, 'statusBarColor', '');
  const isUpperStatusEnable = _.get(contextData, 'isUpperStatusEnable', true);

  return (
    <>
      {isUpperStatusEnable && (
        <SafeAreaView style={{ backgroundColor: statusBarColor }} />
      )}
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <RootNavigator />
      <SafeAreaView style={{ backgroundColor: COLORS.white }} />
    </>
  );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: COLORS.white,
  },
});
export default FirstScreen;
