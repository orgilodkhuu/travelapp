import React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {Lesgo} from './lesgo';

export const Landing = ({setPage}: {setPage: Function}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../Images/landing.png')} />
      <Lesgo />
      <View style={styles.greeting}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Leonard!</Text>
      </View>
      <Pressable style={styles.btn} onPress={() => setPage('select')}>
        <Text style={styles.explore}>EXPLORE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    marginTop: 35,
  },
  top: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    marginTop: 80,
  },
  lesgo: {
    fontSize: 18,
    color: 'orange',
    marginLeft: 30,
    marginBottom: 10,
  },
  greeting: {
    flexDirection: 'column',
    marginLeft: 40,
    marginTop: 10,
  },
  hello: {
    fontSize: 40,
    color: '#72978F',
    fontFamily: 'Times New Roman',
  },
  name: {
    fontSize: 42,
    color: 'black',
    fontFamily: 'Times New Roman',
  },
  btn: {
    backgroundColor: 'black',
    width: 300,
    height: 70,
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
  },
  explore: {
    fontSize: 22,
    color: 'white',
  },
});
