import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './TopUsersScreenStyle';
import {TopUsers} from '../../../data';
import TopUserCard from '../../Components/TopUserCard/TopUserCard';
import Header from '../../Components/Header/Header';
import { COLORS } from '../../Common/Colors';

const TopUsersScreen = () => {
  const renderItem = ({item}) => {
    return (
      <>
        <TopUserCard item={item} />
      </>
    );
  };
  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
    <View style={styles.mainView}>
      <Header
        isBackEnable={true}
        title={'Top User'}
        customMainViewBack={styles.headerContainer}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        numColumns={2}
        renderItem={renderItem}
        data={TopUsers}
      />
    </View>
    </>
  );
};

export default TopUsersScreen;
