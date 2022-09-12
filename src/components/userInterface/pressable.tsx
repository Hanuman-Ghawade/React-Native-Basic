import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

const PressableComponent = () => {
  const logPress = (pressType: string) => {
    console.log(pressType);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => logPress('OnPress')}
        onPressIn={() => logPress('On Press In')}
        onPressOut={() => logPress('On Press Out')}
        onLongPress={() => logPress('On Long Press')}
      >
        <Text style={{color: 'orange', paddingTop: 100}}>Pressable Me </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PressableComponent;
