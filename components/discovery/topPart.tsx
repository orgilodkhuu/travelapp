import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Top = ({name}: {name: string}) => {
  return (
    <View style={styles.top}>
      <View style={styles.topText}>
        <Text style={styles.text}>Discover,</Text>
        <Text style={styles.text}>{name}!</Text>
      </View>
      <View style={styles.search}>
        <Image source={require('../../Images/magnifier.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
    height: 80,
  },
  topText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  search: {
    height: 40,
    aspectRatio: 1 / 1,
    backgroundColor: '#F4F1EC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
