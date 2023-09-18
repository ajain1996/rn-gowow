import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '../Icon/Icon';
import {IMAGES} from '../../assets/Images/map';
import {styles} from './PointViewComponentStyle';

const PointViewComponent = props => {
  const {points, customPointsContainer, customPointsText, customPointsIcon} =
    props;

  return (
    <View style={[styles.pointsContainer, customPointsContainer]}>
      <Icon style={customPointsIcon} icon={IMAGES.coins} />
      <Text style={[styles.valueTxtStyle, customPointsText]}>{points}</Text>
    </View>
  );
};

export default PointViewComponent;
