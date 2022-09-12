import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const ImageBackgrounds = () => (
  <View>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Image Background 8888</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    paddingTop: 350,
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
  },
});

export default ImageBackgrounds;
