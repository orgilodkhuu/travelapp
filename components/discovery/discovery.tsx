import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Top} from './topPart';
import {Category} from './category';

export const Discover = ({name}: {name: string}) => {
  return (
    <View style={styles.container}>
      <Top name={name} />
      <Category />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});
