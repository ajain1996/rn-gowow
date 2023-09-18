import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HomeDetailsCardStyle';
import {Icon} from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../Globals/constants';

const HomeDetailsCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => props.onCardPress()}
      style={styles.mainView}>
      <View style={styles.subView}>
        <View style={styles.textView}>
          <Text style={styles.count}>{props.counts}</Text>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.notificationButton}>
          <Icon icon={props.icon} style={styles.notification} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeDetailsCard;
