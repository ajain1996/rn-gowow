import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './OnBoardingButtonStyle';

const OnBoardingButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.buttonStyle]}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OnBoardingButton;
