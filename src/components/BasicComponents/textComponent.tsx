import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextComponent = () => {
  const [titleText, setTitleText] = useState('Hello World');
  const bodyText = 'This is a react Native Project.';

  const onPressTitle = () => {
    setTitleText('Hello World Pressed');
  };
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Cochin',
  },
  baseText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default TextComponent;
