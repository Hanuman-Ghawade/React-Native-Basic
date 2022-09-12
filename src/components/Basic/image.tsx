import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  firstLogo: {
    width: 100,
    height: 100,
  },

  secondLogo: {
    paddingTop: 100,
    width: 100,
    height: 100,
  },
  textSize: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>React Native </Text>

      <Image
        style={styles.firstLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Image
        style={styles.secondLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;
