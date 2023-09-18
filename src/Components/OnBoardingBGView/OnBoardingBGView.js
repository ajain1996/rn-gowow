import {View, Text} from 'react-native';
import React from 'react';
import { styles } from './OnBoardingBGViewStyle';

const OnBoardingBGView = props => {
  return <View style={styles.mainView} >{props.children}</View>;
};

export default OnBoardingBGView;
