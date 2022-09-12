import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const names: {id: number; name: string}[] = [
  {
    id: 1,
    name: 'Hanuman',
  },
  {
    id: 2,
    name: 'Vitthal',
  },
  {
    id: 3,
    name: 'Chinmay',
  },
  {
    id: 4,
    name: 'Aditya',
  },
  {
    id: 4,
    name: 'Vijay',
  },
];
const FlatListComponent = () => {
  return (
    <FlatList
      style={styles.item}
      data={names}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FlatListComponent;
