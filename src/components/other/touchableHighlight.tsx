import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlights = () => {
  const [count, setCount] = useState(0);
  const onpress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onpress}>
        <View style={styles.button}>
          <Text>Touch here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    color: 'D2001A',
    fontSize: 100,
  },
});
export default TouchableHighlights;
