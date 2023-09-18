import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
} from 'react-native';
import {styles} from './OnBoardingModalComponentStyle';
import OnBoardingHeader from '../OnBoardingHeader/OnBoardingHeader';

const OnBoardingModalComponent = props => {
  const [modalVisible, setModalVisible] = useState(props.isVisible);
  useEffect(() => {
    setModalVisible(props.isVisible);
  }, [props.isVisible]);

  return (
    modalVisible && (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            props.modalClose(false);
          }}>
          <View style={styles.centeredView}>
            <View style={[styles.modalView, props.modalView]}>
              <OnBoardingHeader
                onPress={() => {
                  setModalVisible(false);
                  props.modalClose(false);
                }}
                isBackEnable={true}
                title={props.title}
                customMainViewBack={styles.headerContainer}
              />
              {props.children}
            </View>
          </View>
        </Modal>
      </View>
    )
  );
};

export default OnBoardingModalComponent;
