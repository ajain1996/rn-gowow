import React, { useEffect, useRef } from 'react'

import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import { w } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import MText from './Text';

interface InputListProp {
    label: string,
    value: string,
}

interface DropdownProp {
    value?: string | undefined;
    onChange?: (text: string) => void;
    placeholder?: string;
    data?: Array<InputListProp>;
    dropdownStyle?: ViewStyle | TextStyle;
    error?: string;
    label: string;
}

export default function CustomDropdownComponent({
    value,
    placeholder,
    data,
    onChange,
    dropdownStyle,
    error,
    label
}: DropdownProp) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [dropdownData, setDropdownData] = React.useState("");

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View>
            <MText style={styles.label}>{label}</MText>
            <View style={[styles.dropdown, dropdownStyle]}>
                <Dropdown
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={value?.length > 0 ? value?.toLowerCase() : placeholder}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setDropdownData(item.value);
                        setIsFocus(false);
                        onChange(item.value.toString())
                    }}
                    renderItem={renderItem}
                    placeholderStyle={[styles.placeholderStyle, { color: value?.length > 0 ? "#fff" : Colors.subText }]}
                    selectedTextStyle={styles.selectedTextStyle}
                    dropdownPosition="top"
                    containerStyle={{ borderRadius: 10, width: Size.wWidth / 1.16 }}
                />

                {error && <Text style={styles.errorMsg}>{error} !</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: Size.s12,
        color: Colors.red,
        marginTop: 1,
        marginLeft: -8
    },
    dropdown: {
        height: w(12),
        paddingHorizontal: Size.s,
        borderRadius: Size.s12,
        color: Colors.subText,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#F6F6F6"
    },
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: Size.s14 + 1,
        fontWeight: "500",
        color: Colors.subText,
    },
    selectedTextStyle: {
        fontSize: Size.s14 + 1,
        color: Colors.black,
        fontWeight: "500",
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: w(3.4),
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: w(3.4),
        color: Colors.black,
        height: Size.l
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginTop: 14,
    },
})