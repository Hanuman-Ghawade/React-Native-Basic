/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}
    >
      <View style={{backgroundColor: 'green', flex: 1}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text
        style={{
          height: 100,
          fontSize: 50,
        }}
      >
        Hello World
      </Text>
    </View>
  );
};
export default ViewBoxesWithColorAndText;
