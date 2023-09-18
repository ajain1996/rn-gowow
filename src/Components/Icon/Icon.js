import * as React from 'react';
import { View } from 'react-native';
import { presets } from './Icon.props';
import _ from 'lodash';
import { COLORS } from '../../Common/Colors';
import { IMAGES } from '../../assets/Images/map';

const CONTAINER = {};

export function Icon(props) {
  const {
    style: styleOverride = {},
    preset = 'default',
    icon,
    containerStyle,
    iconColor,
    testID,
    ...rest
  } = props;
  const iconContainer = [CONTAINER, containerStyle];
  const tintColor = _.get(COLORS, iconColor || '', iconColor || undefined);
  const style = { ...presets[preset], tintColor, ...styleOverride };
  const IconImage = _.get(IMAGES, icon || '', icon);

  let result = null;
  if (icon && IconImage.default) {
    result = (
      <View style={iconContainer} {...rest}>
        <IconImage.default fill={tintColor} {...style} testID={testID} />
      </View>
    );
  }

  return result;
}
