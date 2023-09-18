import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Globals/globalProvider';
import Header from '../../Components/Header/Header';
import { styles } from './HomeScreenStyle';
import SearchBar from '../../Components/Searchbar/SearchBar';
import HomeDetailsCard from '../../Components/HomeDetailsCard/HomeDetailsCard';
import { IMAGES } from '../../assets/Images/map';
import OpportunitiesCard from '../../Components/OpportunitiesCard/OpportunitiesCard';
import { socialData } from './data';
import SocialCard from '../../Components/SocialCard/SocialCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../Globals/constants';
import GrabConfirmationModal from '../../Components/GrabConfirmationModal/GrabConfirmationModal';
import { COLORS } from '../../Common/Colors';
import { SpaceBetweenRow } from '../../Components/Wrapper';
import Button from '../../Components/Button';
import Icons from '../../Components/Icon/Icons';

const HomeScreen = () => {
  const contextData = useContext(GlobalContext);
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const { setMasterObj, masterObj, setIsUpperStatusEnable } = contextData;

  const renderItem = ({ item }) => {
    return (
      <View>
        <SocialCard
          item={item}
          onCardPress={() => {
            navigation.navigate(ScreenNames.FEED_DETAIL_SCREEN);
          }}
          onGrabBtnPress={val => setIsVisible(val)}
        />
        <View style={styles.spacer15} />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLORS.secondaryLight }} />
      <Header
        onNotificationPress={() =>
          navigation.navigate(ScreenNames.NOTIFICATION_SCREEN)
        }
      />
      <ScrollView style={styles.mainView}>
        <SearchBar />
        <View style={styles.detailsCardView}>
          <HomeDetailsCard
            counts={324}
            icon={IMAGES.user_icon}
            title={'Total Users'}
            onCardPress={() => navigation.navigate(ScreenNames.TOP_USER_SCREEN)}
          />
          <HomeDetailsCard
            counts={324}
            icon={IMAGES.ngo_icon}
            title={'Ngos'}
            onCardPress={() => navigation.navigate(ScreenNames.TOP_NGO_SCREEN)}
          />
          <HomeDetailsCard
            counts={324}
            icon={IMAGES.business_icon}
            title={'Business'}
            onCardPress={() =>
              navigation.navigate(ScreenNames.TOP_BUSINESS_SCREEN)
            }
          />
        </View>
        <View>
          <SpaceBetweenRow>
            <Text style={styles.opportunitiesText}>opportunities</Text>
            <Button
              title="Add Opportunity"
              style={styles.grabButton}
              icon='pluscircle'
              iconType={Icons.AntDesign}
              iconSize={20}
              iconColor='#fff'
              onPress={() => { navigation.navigate(ScreenNames.ADD_NEW_OPPORTUNITY); }}
            />
          </SpaceBetweenRow>
          <View style={styles.opportunitiesView}>
            <OpportunitiesCard
              icon={IMAGES.lifeSaving_icon}
              title="Life Saving"
            />
            <OpportunitiesCard icon={IMAGES.education_icon} title="Material" />
            <OpportunitiesCard
              icon={IMAGES.volunteers_icon}
              title="Volunteers"
            />
            <OpportunitiesCard icon={IMAGES.education_icon} title="Material" />
          </View>
          <View style={styles.flatListView}>
            <FlatList renderItem={renderItem} data={socialData} />
          </View>
        </View>
      </ScrollView>
      <GrabConfirmationModal
        isVisible={isVisible}
        closeModal={isFromDone => {
          setIsVisible(false);
          // if (isFromDone) {
          //   navigation.navigate(ScreenNames.MY_OPPORTUNITIES);
          // }
        }}
      />
    </>
  );
};

export default HomeScreen;
