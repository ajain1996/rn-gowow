import { View, Image, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { styles } from './FeedDetailScreenStyle';
import { Icon } from '../../Components/Icon/Icon';
import { COLORS } from '../../Common/Colors';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../Globals/globalProvider';
import { IMAGES } from '../../assets/Images/map';
import GrabConfirmationModal from '../../Components/GrabConfirmationModal/GrabConfirmationModal';
import { fetchSingleOpportunity } from '../../API/API';
import moment from 'moment';
import CustomLoader, { CustomPanel } from '../../Components/CustomLoader';

const FeedDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const contextData = useContext(GlobalContext);
  const { setIsUpperStatusEnable } = contextData;
  const [isVisible, setIsVisible] = useState(false);
  const isFocused = useIsFocused();
  const [enableTab, setEnableTab] = useState('Contact Details');
  const ngoIconURL = 'https://i.ibb.co/8Yz5m13/image-4-1.png';
  const bgIMGURL = 'https://i.ibb.co/vDkGRPm/image-7.png';

  const opportunityId = route?.params?.opportunityId;

  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setIsUpperStatusEnable(false);
    } else {
      setIsUpperStatusEnable(true);
    }
  }, [isFocused]);

  useEffect(() => {
    setLoading(true);
    fetchSingleOpportunity(opportunityId, (res) => {
      if (res !== null && res?.statusCode === 200) {
        setLoading(false);
        setOpportunitiesList(res?.data)
      }
    })
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ScrollView bounces={false}>
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: opportunitiesList?.image }}
            style={styles.imgBackgroundStyle}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <Icon
              icon="left_arrow"
              style={styles.backIconStyle}
              iconColor={COLORS.white}
            />
          </TouchableOpacity>
          <View style={styles.nameContianer}>
            <Image source={{ uri: ngoIconURL }} style={styles.ngoLogo} />
            <View style={styles.txtContainerView}>
              <Text style={styles.txtName}>{opportunitiesList?.ngoId?.name}</Text>
              <Text style={styles.txtDate}>{moment(opportunitiesList?.ngoId?.createdAt).format("DD MMM YYYY")}</Text>
            </View>
          </View>
          <Text style={styles.txtEventNameStyle}>{opportunitiesList?.opportunityType}</Text>
          <Text style={styles.txtEventDesStyle}>
            {opportunitiesList?.description}
          </Text>
          {/* Tab Bar Start */}
          <View style={styles.grayViewStyle}>
            <View>
              <Text
                style={[
                  enableTab === 'Contact Details'
                    ? styles.activeTxtStyle
                    : styles.inactiveTxtStyle,
                ]}
                onPress={() => setEnableTab('Contact Details')}>
                {'Contact Details'}
              </Text>
              <View
                style={[
                  styles.underlineTxtStyle,
                  enableTab === 'Contact Details'
                    ? { backgroundColor: COLORS.secondary }
                    : { backgroundColor: COLORS.graylighter },
                ]}
              />
            </View>
            <View>
              <Text
                style={[
                  enableTab === 'Venue'
                    ? styles.activeTxtStyle
                    : styles.inactiveTxtStyle,
                ]}
                onPress={() => setEnableTab('Venue')}>
                {'Venue'}
              </Text>
              <View
                style={[
                  styles.underlineTxtStyle,
                  enableTab === 'Venue'
                    ? { backgroundColor: COLORS.secondary }
                    : { backgroundColor: COLORS.graylighter },
                ]}
              />
            </View>
          </View>
          {/* Tab Bar End */}
          {enableTab === 'Contact Details' ? (
            <View>
              <View style={styles.iconContainerView}>
                <Icon
                  icon={IMAGES.call_icon_detail}
                  style={styles.callIconStyle}
                />
              </View>
              <Text style={styles.txtNumberStyle}>{opportunitiesList?.contactNumber}</Text>
              <View style={styles.containerBtns}>
                <TouchableOpacity
                  style={styles.btnGrabStyle}
                  onPress={() => setIsVisible(true)}>
                  <Text style={styles.txtGrabStyle}>{'Grab'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnShareStyle}>
                  <Text style={styles.txtShareStyle}>{'Share'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <GrabConfirmationModal
        isVisible={isVisible}
        closeModal={isFromDone => {
          setIsVisible(false);
        }}
      />

      <CustomPanel loading={loading} />
      <CustomLoader loading={loading} />
    </View>
  );
};

export default FeedDetailScreen;
