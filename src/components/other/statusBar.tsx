import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const StatusBarComponent = () => {
  const styleTypes: string[] = ['Default', 'dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };
  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;
    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>StatusBar Style:</Text>
          <Text style={styles.textStyle}>StatusBar Visibility:</Text>
        </View>
        <StatusBar backgroundColor="green" />
        <View>
          <StatusBar hidden={visibleStatusBar} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Toggle StatusBar"
            onPress={() => changeVisibilityStatusBar}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Change StatusBar style"
            onPress={() => changeStyleStatusBar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#c8c8c8',
    padding: 8,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    padding: 10,
  },
});
export default StatusBarComponent;
