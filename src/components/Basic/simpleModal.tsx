import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
const SimpleModal = (props: {
  changeModalVisible: (bool: boolean) => void;
  setData: (data: string) => void;
}) => {
  const closeModal = (bool: boolean, data: string) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={[styles.text, {fontSize: 20}]}>Simple modal Header</Text>
          <Text style={styles.text}> Simple modal description</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, 'Cancel')}
          >
            <Text style={[styles.text, {color: 'blue'}]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, 'Ok')}
          >
            <Text style={[styles.text, {color: 'blue'}]}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textView: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  touchableOpacity: {
    paddingVertical: 10,
    textAlign: 'center',
    flex: 1,
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
  },
});
export {SimpleModal};
