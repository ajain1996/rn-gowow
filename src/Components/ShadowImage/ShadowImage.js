import {View} from 'react-native';
import React from 'react';
import {Icon} from '../Icon/Icon';
import {styles} from './ShadowImageStyle';

const ShadowImage = props => {
  return (
    <View style={[styles.editIconViewStyle, props.customViewStyle]}>
      <Icon
        icon={props.icon}
        style={[styles.editIconStyle, props.customIconStyle]}
        preset={props.iconPreset}
      />
    </View>
  );
};

export default ShadowImage;
