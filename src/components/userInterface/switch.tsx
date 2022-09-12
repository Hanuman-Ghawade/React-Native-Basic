import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <View style={styles.container}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f5dd4b'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  textStyle: {
    flex: 1,
    marginTop: 100,
  },
});

export default SwitchComponent;
