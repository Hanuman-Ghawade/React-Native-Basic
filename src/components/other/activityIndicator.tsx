import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const ActivityIndicators = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size={'large'} color="#D2001A" />
      <ActivityIndicator size={'small'} color="#1C6758" />
      <ActivityIndicator size={'large'} color="#7FB77E" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default ActivityIndicators;
