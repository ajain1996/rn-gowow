import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './OpportunitiesCardStyle';
import {Icon} from '../Icon/Icon';

const OpportunitiesCard = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View style={styles.imageView}>
        <Icon icon={props.icon} style={styles.icon} />
      </View>

      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OpportunitiesCard;
