import {View, Text, Image} from 'react-native';
import React from 'react';
import {Icon} from '../Icon/Icon';
import {IMAGES} from '../../assets/Images/map';
import {styles} from './UserPointViewStyle';
import { COLORS } from '../../Common/Colors';
import PointViewComponent from '../PointViewComponent/PointViewComponent';

const UserPointView = props => {
  const imgURL =
    'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg';

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.purpleView}></View>
        {props.isFromNGO ? (
          <View style={styles.profileImageStyle}>
            <Icon
              icon={IMAGES.ngo_logo}
              preset={'extraLarge'}
              style={styles.ngoIconStyle}
              iconColor={COLORS.white}
            />
          </View>
        ) : (
          <Image source={{uri: imgURL}} style={styles.profileImageStyle} />
        )}
        <Text style={styles.txtUserName}>Manish</Text>
        <PointViewComponent points={50} />
      </View>
    </View>
  );
};

export default UserPointView;
