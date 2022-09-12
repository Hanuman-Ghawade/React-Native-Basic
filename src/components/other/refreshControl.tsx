import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

const RefreshControlComponent = () => {
  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
      >
        <Text>Pull down the screen </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RefreshControlComponent;
