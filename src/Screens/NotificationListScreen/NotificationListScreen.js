import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './NotificationListScreenStyle';
import Header from '../../Components/Header/Header';
import { COLORS } from '../../Common/Colors';

const NotificationListScreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerViewStyle}>
        <View style={styles.imgContainerView}>
          <Image source={{uri: item.profile}} style={styles.imgProfile} />
        </View>
        <View style={styles.txtContainer}>
          <View style={styles.rowView}>
            <Text style={styles.titleTxtStyle}>{item.title}</Text>
            <Text style={styles.timeTxtStyle}>{item.time}</Text>
          </View>
          <Text style={styles.descTxtStyle}>{item.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
    <View style={styles.mainView}>
      <Header isBackEnable={true} title={'Notification'} />
      <FlatList
        contentContainerStyle={styles.flatListContainerStyle}
        data={arrNotifications}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
    </>
  );
};

const arrNotifications = [
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
  {
    id: 1,
    profile:
      'https://www.bollywoodhungama.com/wp-content/uploads/2020/01/The-Decade-Power-Akshay-Kumar%E2%80%99s-journey-to-become-Mr.-Dependable-at-the-box-office-1.jpg',
    title: 'Mohmmad Imtiyaz Ansari',
    desc: 'New NGO Added : 13-Jun-2023',
    time: '10:30 Am',
  },
];
export default NotificationListScreen;
