import React from 'react'

import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
  ActivityIndicator,
  ImageStyle
} from 'react-native'


import MText from './Text';

import { Row } from './Wrapper';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { h, w } from '../utils';
import { Icon } from './Icon/Icon';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  background?: string;
  title?: string | null;
  image?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconColor?: string;
  iconType?: Function;
  iconPosition?: IconPosition;
  textStyle?: TextStyle;
  SvgIcon?: any;
  mode?: mode;
  color?: string;
  loaderColor?: string;
  loaderSize?: number;
  iconSize?: number;
  iconStyle?: ImageStyle;
}

const Button = ({
  style,
  background,
  title,
  onPress,
  loading,
  disabled,
  icon,
  iconColor,
  iconType,
  iconPosition,
  textStyle,
  SvgIcon,
  mode,
  color,
  loaderColor,
  iconSize,
  iconStyle,
}: ButtonProps) => {
  const isIconAvailable = !!icon && !!iconType;
  const buttonBg = disabled ? Colors.gray6 : Colors.primary;

  let rowStyle = {}
  if (iconPosition) {
    rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
  }

  const paddingHorizontal = isIconAvailable ? Size.xs : 0;

  const btnStyle = () => {
    const buttonStyles = [
      styles.container,
      style,
      {
        backgroundColor: background || buttonBg,
      },
    ]
    switch (mode) {
      case 'contained':
        return [
          ...buttonStyles,
        ]
      case 'outlined':
        return [
          ...buttonStyles,
          {
            backgroundColor: null,
            borderWidth: 1,
            borderColor: Colors.primary,
          }
        ]
      case 'text':
        return [
          ...buttonStyles,
          {
            backgroundColor: null,
          }
        ]
      case 'elevated':
        return [
          ...buttonStyles,
          {
            elevation: Size.vs,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: Size.vs,
            shadowColor: Colors.shadowColor,
          }
        ]
    }
    return buttonStyles;
  }

  const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={btnStyle()}>
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Row style={rowStyle}>
          {isIconAvailable && (
            <Icon
              type={iconType}
              name={icon}
              color={iconColor}
              size={iconSize}
              style={iconStyle}
            />
          )}
          {SvgIcon && <SvgIcon />}
          {title && <MText
            style={[
              styles.text,
              { paddingHorizontal },
              textStyle ? textStyle : {},
            ]}
            color={color ? color : titleColor || Colors.white}>
            {title}
          </MText>}
        </Row>
      )}
    </TouchableOpacity>
  )
};

Button.defaultProps = {
  loaderColor: Colors.white,
  iconColor: Colors.white,
}

const styles = StyleSheet.create({
  container: {
    ...Styles.centered,
    height: h(5.8), //50
    backgroundColor: Colors.primary,
    borderRadius: Size.s12,
    width: Size.wWidth / 1.2
  },
  text: {
    fontSize: Size.s12,
    textTransform: 'capitalize',
    fontWeight: "600",
  },
  icon: {
    // marginTop: 2,
  }
});

export default Button;
