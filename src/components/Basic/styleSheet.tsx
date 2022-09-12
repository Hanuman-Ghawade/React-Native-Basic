import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    height: 250,
    width: 300,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6a5acd',
  },
});

const StyleSheetComponent = () => {
  return (
    <View>
      <Text style={styles.text}> This is React Native Project</Text>
    </View>
  );
};

export default StyleSheetComponent;
