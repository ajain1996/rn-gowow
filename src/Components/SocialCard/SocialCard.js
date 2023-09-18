import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './SocialCardStyle';
import { Icon } from '../Icon/Icon';
import { IMAGES } from '../../assets/Images/map';
import moment from 'moment';

const SocialCard = props => {
  const item = props?.item;

  return (
    <TouchableOpacity style={styles.mainView} onPress={props?.onGrabBtnPress}>
      <View style={styles.foundationView}>
        <Image
          source={{ uri: "https://res.cloudinary.com/dvlksubek/image/upload/v1691264695/gowow/xabtol5lswqwvmlotaum.webp" }}
          style={styles.foundationIcon}
        />
        {/* <Icon icon={IMAGES.camp_image} style={styles.foundationIcon} /> */}
        <View style={styles.foundationTextView}>
          <Text style={styles.foundationTitle}>
            {/* Prabhu Agya Foundation */}
            {item?.ngoId?.name}
          </Text>
          <Text style={styles.foundationDate}>
            {/* 26 Jan 2023 */}
            {moment(item?.ngoId?.createdAt).format("DD MMM YYYY")}
          </Text>
        </View>
      </View>
      <View style={styles.subView}>
        <Text style={styles.foundationTitle}>{item?.subject}</Text>
        <Image
          source={{ uri: "https://res.cloudinary.com/dvlksubek/image/upload/v1691264695/gowow/xabtol5lswqwvmlotaum.webp" }}
          style={styles.image}
        />
        {/* <Icon icon={IMAGES?.image} style={styles.image} /> */}
        <Text style={styles.foundationTitle}>{item?.description}</Text>
        <View style={styles.footerView}>
          <View style={styles.buttonView}>
            {!props?.isFromMyOpportuniteis && (
              <>
                <TouchableOpacity style={styles.button}>
                  <Icon icon={IMAGES.like_icon} style={styles.likeIcon} />
                  <Text style={styles.commentText}>{item?.likeCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon icon={IMAGES.comment_icon} style={styles.likeIcon} />
                  <Text style={styles.commentText}>{item?.commentCount}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <TouchableOpacity style={styles.grabButton} onPress={() => {
            props?.onGrabBtnPress(true)
          }}>
            <Text style={styles.grabText}>
              {props?.isFromMyOpportuniteis ? 'Complete' : 'Grab'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SocialCard;
