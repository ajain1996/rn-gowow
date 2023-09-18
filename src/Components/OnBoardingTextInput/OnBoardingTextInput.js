import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './OnBoardingTextInputStyle';
import { COLORS } from '../../Common/Colors';

const OnBoardingTextInput = ({ textInputTitle, placeholder, isSecure, value, onChangeText }) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>{textInputTitle}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.grayPlaceHolder}
        style={styles.textInput}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default OnBoardingTextInput;
