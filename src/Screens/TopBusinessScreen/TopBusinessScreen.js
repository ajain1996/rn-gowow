import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './TopBusinessScreenStyle';
import TopBusinessCardView from '../../Components/TopBusinessCardView/TopBusinessCardView';
import Header from '../../Components/Header/Header';
import {COLORS} from '../../Common/Colors';

const TopBusinessScreen = () => {
  const renderItem = ({item, index}) => {
    return <TopBusinessCardView item={item} />;
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
      <View style={styles.mainContainer}>
        <Header isBackEnable={true} title={'Top Businesses'} />
        <FlatList
          numColumns={2}
          initialNumToRender={2}
          data={arrBusinessCards}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </>
  );
};

const arrBusinessCards = [
  {
    id: 1,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/23ftLxy/image-13.png',
    name: 'Barnagar Iron Works',
    coins: '800',
  },
];

export default TopBusinessScreen;
