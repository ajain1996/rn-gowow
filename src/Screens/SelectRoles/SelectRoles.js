import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './SelectRolesStyle';
import {ROLES} from './data';
import {Icon} from '../../Components/Icon/Icon';
import {COLORS} from '../../Common/Colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../Globals/constants';

const SelectRoles = (props) => {
  const navigation = useNavigation();

  const onButtonPress = item => {
    switch (item.id) {
      case 1:
        navigation.navigate(ScreenNames.USER_REGISTRATION);
        break;
      case 2:
        navigation.navigate(ScreenNames.BUSINESS_REGISTRATION);
        break;
      case 3:
        navigation.navigate(ScreenNames.NGO_REGISTRATION);
        break;
      default:
        navigation.navigate(ScreenNames.USER_REGISTRATION);
        break;
    }
    props.closeModal();
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onButtonPress(item)}
        key={String(index)}
        style={styles.roleCard}>
        <View style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <Icon
            icon={item.icon}
            style={styles.backIconStyle}
            iconColor={COLORS.white}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.role}>{item.title}</Text>
          <Text style={styles.roleSubText}>{item.subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>Welcome to GoWow!!</Text>
        <Text style={styles.subText}>
          Please let us Know How you want to change the world.
        </Text>
      </View>
      <FlatList
        data={ROLES}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
};

export default SelectRoles;
