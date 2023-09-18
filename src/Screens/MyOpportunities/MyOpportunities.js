import { View, Text, FlatList, SafeAreaView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SocialCard from '../../Components/SocialCard/SocialCard';
import { styles } from './MyOpportunities.styles';
import { socialData } from '../HomeScreen/data';
import { COLORS } from '../../Common/Colors';
import CustomLoader, { CustomPanel } from '../../Components/CustomLoader';
import { fetchAllOpportunity } from '../../API/API';
import { ScreenNames } from '../../Globals/constants';

const MyOpportunities = ({ navigation }) => {
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllOpportunity("Delhi", (res) => {
      if (res !== null && res?.statusCode === 200) {
        setLoading(false);
        setOpportunitiesList(res?.data)
      }
    })
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <SocialCard
          item={item}
          isFromMyOpportuniteis={true}
          onGrabBtnPress={() => navigation.navigate(ScreenNames.FEED_DETAIL_SCREEN, {
            opportunityId: item?._id
          })}
        />
        <View style={styles.spacer15} />
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: COLORS.secondaryLight }} />
      <View style={styles.mainView}>
        <Header isBackEnable={true} title={'My Opportunities'} />
        <View style={styles.flatListView}>
          <FlatList
            renderItem={renderItem}
            data={opportunitiesList}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentStyle}
          />
        </View>
      </View>

      <CustomPanel loading={loading} />
      <CustomLoader loading={loading} />
    </>
  );
};

export default MyOpportunities;
