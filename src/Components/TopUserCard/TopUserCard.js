import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './TopUserCardStyle';
import {IMAGES} from '../../assets/Images/map';
import {Icon} from '../Icon/Icon';
import PointViewComponent from '../PointViewComponent/PointViewComponent';
import {normalize} from '../../Globals/normalize';

const TopUserCard = props => {
  const item = props.item;
  return (
    <View style={styles.mainView}>
      <View style={styles.header} />
      <View style={styles.footer}>
        <Image style={styles.user} source={IMAGES.user} />
        <Text style={styles.name}>{item.name}</Text>
        <View
          style={styles.containerView}>
          <PointViewComponent
            points={item.amount}
            customPointsContainer={styles.cashView}
            customPointsIcon={styles.icon}
            customPointsText={styles.amount}
          />
        </View>
      </View>
    </View>
  );
};

export default TopUserCard;
