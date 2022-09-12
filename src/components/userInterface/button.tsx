import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ButtonComponent = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.firstButton}> This is the login button </Text>
        <Button
          onPress={() => Alert.alert('Login Button Pressed')}
          title="Login"
          color="#ff0000"
          disabled
        />
      </View>
      <View>
        <Text style={styles.firstButton}> This is the signup button </Text>
        <Button
          onPress={() => Alert.alert('Signup Button Pressed')}
          title="Signup"
          color="#8b4513"
        />
      </View>
      <Text>This are left& right hand button </Text>
      <View style={styles.twoButton}>
        <Button
          onPress={() => Alert.alert('Left Button Button Pressed')}
          title="Left Button"
          color="#00ff7f"
        />
        <Button
          onPress={() => Alert.alert('Right Button Pressed')}
          title="Right Button"
          color="#ee82ee"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firstButton: {
    color: '#6a5acd',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  twoButton: {
    color: '#ffff00',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default ButtonComponent;
