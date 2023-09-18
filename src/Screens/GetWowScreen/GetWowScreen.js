import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../Common/Colors';
import {styles} from './GetWowScreenStyle';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/Searchbar/SearchBar';
import {IMAGES} from '../../assets/Images/map';
import {Icon} from '../../Components/Icon/Icon';
import {normalize} from '../../Globals/normalize';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../Globals/constants';

const GetWowScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.businessCardStyle}>
        <Image source={{uri: item.url}} style={styles.imgBusiness} />
        <View style={styles.containerViewMap}>
          <Text style={styles.txtNameStyle}>{item.name}</Text>
          <TouchableOpacity style={styles.viewMapStyle}>
            <Text style={styles.txtViewMapStyle}>{'View Map'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowViewStyle}>
          <View style={{marginBottom: normalize(10)}}>
            <Text style={styles.txtLeftStyle}>{'Category'}</Text>
            <Text style={styles.txtLeftStyle}>{'Discount (%)'}</Text>
            <Text style={styles.txtLeftStyle}>{'Minimum Bill'}</Text>
            <Text style={styles.txtLeftStyle}>{'Address'}</Text>
          </View>
          <View style={styles.verticalLineStyle} />
          <View style={{marginBottom: normalize(10), flex: 1}}>
            <Text style={styles.txtRightStyle}>{item.category}</Text>
            <Text style={styles.txtRightStyle}>{item.discount}</Text>
            <Text style={styles.txtRightStyle}>{item.min_bill}</Text>
            <Text style={styles.txtRightStyle}>{item.address}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.secondaryLight}} />
      <View style={styles.mainCotainer}>
        <Header
          onNotificationPress={() =>
            navigation.navigate(ScreenNames.NOTIFICATION_SCREEN)
          }
        />
        <View style={styles.searchBarContainer}>
          <SearchBar isFilterEnable={true} />
        </View>
        <View style={styles.titleAndButtonContainer}>
          <Text style={styles.txtBusiness}>{'Businesses'}</Text>
          <TouchableOpacity style={styles.btnScanAndRedeem}>
            <Icon icon={IMAGES.qr_code} style={styles.scanIcon} />
            <Text style={styles.scanTextStyle}>{'Scan & Redeem'}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={arrWOWList}
          style={{marginTop: normalize(5)}}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </>
  );
};

const arrWOWList = [
  {
    id: 1,
    url: 'https://i.ibb.co/cv5m6xQ/image-28.png',
    name: 'Agni Telecom',
    category: 'Grocery & general stores ',
    discount: '15',
    min_bill: '200',
    address: '2 E Sadhna Nagar',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/cv5m6xQ/image-28.png',
    name: 'Agni Telecom',
    category: 'Grocery & general stores ',
    discount: '15',
    min_bill: '200',
    address: '2 E Sadhna Nagar',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/cv5m6xQ/image-28.png',
    name: 'Agni Telecom',
    category: 'Grocery & general stores ',
    discount: '15',
    min_bill: '200',
    address: '2 E Sadhna Nagar',
  },
];

export default GetWowScreen;
