import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import {styles} from './ProfileScreenStyle';
import {Icon} from '../../Components/Icon/Icon';
import ShadowImage from '../../Components/ShadowImage/ShadowImage';
import {IMAGES} from '../../assets/Images/map';
import {COLORS} from '../../Common/Colors';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../Globals/constants';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const imgURL =
    'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg';

  const arrProfileData = [
    {id: 1, title: 'My Profile', icon: IMAGES.profile_orange},
    {id: 2, title: 'Change Password', icon: IMAGES.password_icon},
    {id: 3, title: 'Notification', icon: IMAGES.notification_orange_icon},
    {id: 4, title: 'Share', icon: IMAGES.share_icon},
    {id: 5, title: 'Help & Support', icon: IMAGES.support_icon},
    {id: 6, title: 'About App', icon: IMAGES.about_icon},
    {id: 7, title: 'Log Out', icon: IMAGES.logout_icon},
  ];

  const onButtonPress = (item) => {
    switch (item.id) {
      case 7:
        navigation.navigate(ScreenNames.ON_BOARDING_LOGIN_SCREEN)
        break;
      default:
        Alert.alert(item.title);
        break;
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onButtonPress(item)}
        style={styles.btnOptionView}>
        <ShadowImage
          icon={item.icon}
          customViewStyle={styles.customViewStyle}
          customIconStyle={styles.customIconStyle}
          iconPreset={'small'}
        />
        <Text style={styles.txtMyProfile}>{item.title}</Text>
        <Icon
          icon={IMAGES.right_navigate_icon}
          style={styles.rightArrowStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
      <View style={styles.mainContainer}>
        <Header isBackEnable={true} title={'Profile'} />
        {/* Profile Image Section */}
        <View style={styles.profileContainerView}>
          <View style={styles.imageContainer}>
            <Image source={{uri: imgURL}} style={styles.profileView} />
            <ShadowImage
              icon="edit_icon"
              customViewStyle={styles.editIconViewStyle}
            />
          </View>
          <Text style={styles.txtNameStyle}>{'Akshay Kumar'}</Text>
        </View>
        {/* Buttons Section */}
        <FlatList
          contentContainerStyle={styles.flatListStyle}
          data={arrProfileData}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </>
  );
};

export default ProfileScreen;
