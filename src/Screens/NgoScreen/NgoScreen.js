import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './NgoScreenStyle';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/Searchbar/SearchBar';
import { IMAGES } from '../../assets/Images/map';
import ShadowImage from '../../Components/ShadowImage/ShadowImage';
import { COLORS } from '../../Common/Colors';
import { fetchAllNGSAPI } from '../../API/API';
import CustomLoader, { CustomPanel } from '../../Components/CustomLoader';

const NgoScreen = () => {
  const [arrNGOList, setArrNGOList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllNGSAPI("Delhi", (res) => {
      if (res !== null && res?.statusCode === 200) {
        setLoading(false);
        setArrNGOList(res?.data)
      }
    })
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.whiteWrapperView}>
        <Image
          source={{ uri: "https://i.ibb.co/5FyXZqm/image-22.png" }}
          style={styles.ngoIconStyle}
          resizeMode="contain"
        />
        <View style={styles.conatinerNameAndAddress}>
          <Text style={styles.txtNameStyle} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.rowView}>
            <ShadowImage
              icon={IMAGES.pin_icon}
              customViewStyle={styles.customPinStyle}
            />
            <Text style={styles.txtAddressStyle}>{item.address}</Text>
          </View>
          <View style={styles.rowView}>
            <ShadowImage
              icon={IMAGES.call_icon}
              customViewStyle={styles.customPinStyle}
            />
            <Text style={styles.txtAddressStyle}>{item.mobileNumber}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnViewMap}
            onPress={() => Alert.alert('View Map button pressed')}>
            <Text style={styles.txtViewMapStyle}>{'View Map'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: COLORS.secondaryLight, paddingTop: 40 }} />
      <View style={styles.mainContainer}>
        <Header isBackEnable={true} title={'Ngo List'} />
        <View style={styles.searchBarContainer}>
          <SearchBar isFilterEnable={true} />
        </View>
        <FlatList
          contentContainerStyle={styles.flatListContainerStyle}
          data={arrNGOList}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
      <CustomPanel loading={loading} />
      <CustomLoader loading={loading} />
    </>
  );
};

const arrNGODATAList = [
  {
    id: 1,
    icon: 'https://i.ibb.co/5FyXZqm/image-22.png',
    name: 'Shree Ram Nirashrit Mahila EVM Bal Asharam',
    address: '1, Patel Nagar, Gomathgiri, Indore, Madhya Pradesh 453112, India',
    phoneNumber: '9691961331',
    cordinates: {},
  },
  {
    id: 2,
    icon: 'https://i.ibb.co/5FyXZqm/image-22.png',
    name: 'Shree Ram Nirashrit Mahila EVM Bal Asharam',
    address: '1, Patel Nagar, Gomathgiri, Indore, Madhya Pradesh 453112, India',
    phoneNumber: '9691961331',
    cordinates: {},
  },
  {
    id: 3,
    icon: 'https://i.ibb.co/5FyXZqm/image-22.png',
    name: 'Shree Ram Nirashrit Mahila EVM Bal Asharam',
    address: '1, Patel Nagar, Gomathgiri, Indore, Madhya Pradesh 453112, India',
    phoneNumber: '9691961331',
    cordinates: {},
  },
  {
    id: 4,
    icon: 'https://i.ibb.co/5FyXZqm/image-22.png',
    name: 'Shree Ram Nirashrit Mahila EVM Bal Asharam',
    address: '1, Patel Nagar, Gomathgiri, Indore, Madhya Pradesh 453112, India',
    phoneNumber: '9691961331',
    cordinates: {},
  },
  {
    id: 5,
    icon: 'https://i.ibb.co/5FyXZqm/image-22.png',
    name: 'Shree Ram Nirashrit Mahila EVM Bal Asharam',
    address: '1, Patel Nagar, Gomathgiri, Indore, Madhya Pradesh 453112, India',
    phoneNumber: '9691961331',
    cordinates: {},
  },
];

export default NgoScreen;
