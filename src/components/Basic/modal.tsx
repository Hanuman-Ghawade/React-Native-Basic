import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import {SimpleModal} from './simpleModal';

const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState(null);

  const changeModalVisible = (bool: boolean) => {
    setIsModalVisible(bool);
  };
  const setData = (data: string) => {
    setChooseData(data)
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{chooseData}</Text>
      <TouchableOpacity
        onPress={() => changeModalVisible(true)}
        style={styles.touchableOpacity}
      >
        <Text style={styles.text}>Open Model</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}
      >
        <SimpleModal
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    paddingHorizontal: 60,
  },
  text: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalComponent;
