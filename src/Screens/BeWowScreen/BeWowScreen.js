import {View, Text, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './BeWowScreenStyle';
import {GlobalContext} from '../../Globals/globalProvider';
import {COLORS} from '../../Common/Colors';
import {useIsFocused} from '@react-navigation/native';
import Header from '../../Components/Header/Header';
import {Icon} from '../../Components/Icon/Icon';
import {IMAGES} from '../../assets/Images/map';
import _ from 'lodash';
import UserPointView from '../../Components/UserPointView/UserPointView';

const BeWowScreen = () => {
  const contextData = useContext(GlobalContext);
  const {setStatusBarColor, setIsUpperStatusEnable} = contextData;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setStatusBarColor(COLORS.secondary);
    } else {
      setStatusBarColor(COLORS.secondaryLight);
    }
  }, [isFocused]);

  const renderCardView = item => {
    return (
      <View
        style={[
          styles.whiteContainer,
          item.id === 2 && styles.secondWhiteContainer,
        ]}>
        <View
          style={[styles.badgeStyle, item.id === 2 && styles.secondBadgeStyle]}>
          <Icon icon={item.icon} style={styles.awardIconStyle} />
        </View>
        <Text
          style={[
            styles.titleTxtStyle,
            item.id === 2 && styles.secondTxtStyle,
          ]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.valueContainer,
            item.id === 2 && styles.secondValueContainer,
          ]}>
          <Text style={styles.valueTxtStyle}>{item.value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView style={{backgroundColor: COLORS.secondary}} />
      <View style={styles.mainContainer}>
        <Header
          isBackEnable={true}
          title={'User'}
          customMainViewBack={styles.headerContainer}
        />
        <View style={styles.belowHeaderView}>
          <Icon icon={IMAGES.star_icon} style={styles.star1IconStyle} />
          <Icon icon={IMAGES.star_icon} style={styles.star2IconStyle} />
        </View>
      </View>
      <View style={styles.cardContainerView}>
        {_.map(arrCards, item => {
          return renderCardView(item);
        })}
      </View>
      <View style={styles.userConatinerView}>
        {_.map(arrUserCards, item => {
          return <UserPointView />;
        })}
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert('View all leader board pressed')}
        style={styles.viewAllBTNStyle}>
        <Text style={styles.btnTxtStyle}>View all Leaderboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const arrCards = [
  {
    id: 1,
    title: 'Points',
    value: '25',
    icon: IMAGES.point_award,
  },
  {
    id: 2,
    title: 'coins',
    value: '25',
    icon: IMAGES.coin_award,
  },
  {
    id: 3,
    title: 'Levels',
    value: 'BRONZE V',
    icon: IMAGES.level_award,
  },
];

const arrUserCards = [
  {
    id: 1,
    url: '',
    name: 'Manish',
    coins: '50',
  },
  {
    id: 2,
    url: '',
    name: 'Manish',
    coins: '50',
  },
  {
    id: 3,
    url: '',
    name: 'Manish',
    coins: '50',
  },
];

export default BeWowScreen;
