import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Lesgo = () => {
  return (
    <View style={styles.top}>
      <Text style={styles.lesgo}>LET'S GO!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    marginTop: 60,
  },
  lesgo: {
    fontSize: 18,
    color: 'orange',
    marginLeft: 30,
    marginBottom: 10,
  },
});
