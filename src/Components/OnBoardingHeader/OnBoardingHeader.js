import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './OnBoardingHeaderStyle';
import {IMAGES} from '../../assets/Images/map';
import {Icon} from '../Icon/Icon';
import _ from 'lodash';
import {COLORS} from '../../Common/Colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../Globals/constants';

const OnBoardingHeader = props => {
  const navigation = useNavigation();

  const BackHeader = () => {
    return (
      <View style={[styles.mainViewBack, props.customMainViewBack]}>
        <View style={styles.subContainerStyle}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.onPress()}>
            <Icon
              icon="left_arrow"
              style={styles.backIconStyle}
              iconColor={COLORS.white}
            />
          </TouchableOpacity>
          <Text style={styles.txtTitleStyle}>{_.get(props, 'title', '')}</Text>
        </View>
      </View>
    );
  };

  return BackHeader();
};

export default OnBoardingHeader;
