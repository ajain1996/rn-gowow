import {View, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SearchBarStyle';
import {IMAGES} from '../../assets/Images/map';
import {Icon} from '../Icon/Icon';
import {COLORS} from '../../Common/Colors';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.rowViewContainer}>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.searchView}>
          <Icon icon="search_icon" style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          value={searchText}
          style={styles.input}
          placeholderTextColor={COLORS.lightGray}
        />
      </View>
      {props.isFilterEnable && (
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={() => Alert.alert('On filter button pressed')}>
          <Icon icon={IMAGES.filter_icon} style={styles.filterIconStyle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
