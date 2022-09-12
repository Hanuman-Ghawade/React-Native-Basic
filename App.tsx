import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TouchableHighlights from './src/components/other/touchableHighlight';

const App: FC = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableHighlights />
      </View>
    </SafeAreaView>
  );
};
export default App;
