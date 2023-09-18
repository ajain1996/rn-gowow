import { View, Text } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './OnBoardingPickerStyle';

const OnBoardingPicker = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.items);
  return (
    <View style={{ zIndex: 1000 }}>
      <Text style={styles.title}>{props.textInputTitle}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdownStyle}
        onChangeValue={(val) => { props?.onChangeValue(val) }}
        dropDownDirection={props.dropDownDirection}
        placeholderStyle={styles.placeholderStyle}
        dropDownContainerStyle={styles.containerStyle}
      />
    </View>
  );
};

export default OnBoardingPicker;
