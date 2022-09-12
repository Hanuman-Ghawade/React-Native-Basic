import React from 'react';
import {
  Text,
  View,
  SectionList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const DATA: {title: string; data: string[]}[] = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto', 'Sandwich'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream', 'Cornetto'],
  },
];

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SectionLists = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#FFDE00',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D2001A',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#E3C770',
  },
});
export default SectionLists;
