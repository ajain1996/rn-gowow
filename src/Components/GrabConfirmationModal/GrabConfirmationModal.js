import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './GrabConfirmationModalStyle';
import Modal from 'react-native-modal';
import {Icon} from '../Icon/Icon';
import {IMAGES} from '../../assets/Images/map';

const GrabConfirmationModal = props => {
  const [isVisibleModal, setIsVisibleModal] = useState(props.isVisible);

  useEffect(() => {
    setIsVisibleModal(props.isVisible);
  }, [props.isVisible]);

  return (
    <>
      <Modal
        style={styles.modalStyle}
        animationIn={'slideInUp'}
        animationOut={'slideInDown'}
        visible={isVisibleModal}
        useNativeDriver={true}
        onBackButtonPress={props.closeModal}
        onBackdropPress={props.closeModal}
        onRequestClose={props.closeModal}>
        <View style={styles.mainView}>
          <Icon icon={IMAGES.success_icon} style={styles.correctIconStyle} />
          <Text style={styles.txtConfirmGrab}>{'Confirm Grab'}</Text>
          <Text style={styles.confirmTxtStyle}>
            {'Are you sure that you want to grab this opportunity ?'}
          </Text>
          <TouchableOpacity
            style={styles.btnDoneStyle}
            onPress={props.closeModal}>
            <Text style={styles.txtDoneStyle}>{'Done'}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <SafeAreaView />
    </>
  );
};

export default GrabConfirmationModal;
