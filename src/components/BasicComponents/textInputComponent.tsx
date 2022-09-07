import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    borderColor: 'red',
    borderWidth: 4,
  },
});

const InputField = () => {
  return (
    <TextInput style={styles.input} placeholder="Please enter the value" />
  );
};

export default InputField;
