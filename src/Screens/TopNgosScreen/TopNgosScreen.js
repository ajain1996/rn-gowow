import {View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './TopNgosScreenStyle';
import UserPointView from '../../Components/UserPointView/UserPointView';
import _ from 'lodash';
import Header from '../../Components/Header/Header';
import { COLORS } from '../../Common/Colors';

const TopNgosScreen = () => {
  const renderItem = ({item, index}) => {
    return <UserPointView isFromNGO={true} />;
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
      <View style={styles.mainContainer}>
        <Header isBackEnable={true} title={'Top NGOs'} />
        <FlatList
          data={arrUserCards}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </>
  );
};

const arrUserCards = [
  {
    id: 1,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 2,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 3,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 2,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 3,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 2,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 3,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 2,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
  {
    id: 3,
    url: '',
    name: 'Prabhu Agya Foundation',
    coins: '50',
  },
];

export default TopNgosScreen;
