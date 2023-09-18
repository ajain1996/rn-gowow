import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './TopBusinessCardViewStyle';
import PointViewComponent from '../PointViewComponent/PointViewComponent';

const TopBusinessCardView = props => {
  let {item} = props;
  return (
    <View style={styles.cardContainerView}>
      <Image source={{uri: item.url}} style={styles.businessImage} />
      <Text style={styles.txtBusinessName} numberOfLines={1}>{item.name}</Text>
      <View style={styles.containerViewStyle}>
        <PointViewComponent
          points={item.coins}
          customPointsContainer={styles.customPointsContainer}
        />
      </View>
    </View>
  );
};

export default TopBusinessCardView;
