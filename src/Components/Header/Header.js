import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './HeaderStyle';
import {IMAGES} from '../../assets/Images/map';
import {Icon} from '../Icon/Icon';
import _ from 'lodash';
import {COLORS} from '../../Common/Colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../Globals/constants';

const Header = props => {
  const navigation = useNavigation();

  const AppIconHeader = () => {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Icon icon="app_logo" preset={'medium'} style={styles.appLogoStyle} />
          <View style={styles.buttonView}>
            {_.isEmpty(_.get(props, 'onNotificationPress', '')) && (
              <TouchableOpacity
                style={styles.notificationButton}
                onPress={props?.onNotificationPress}>
                <Icon icon="notification_icon" style={styles.notification} />
              </TouchableOpacity>
            )}
            {_.isEmpty(_.get(props, 'onUserIconPress', '')) && (
              <TouchableOpacity
                style={styles.userButton}
                // onPress={props?.onUserIconPress}
                onPress={() => {
                  navigation.navigate(ScreenNames.MY_OPPORTUNITIES);
                }}>
                <Image style={styles.user} source={IMAGES.user} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  const BackHeader = () => {
    return (
      <View style={[styles.mainViewBack, props.customMainViewBack]}>
        <View style={styles.subContainerStyle}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
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

  return props.isBackEnable ? BackHeader() : AppIconHeader();
};

export default Header;
