/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {Lesgo} from './lesgo';

const wt = Dimensions.get('window').width;
const ht = Dimensions.get('window').height;

export const Select = ({setPage}: {setPage: Function}) => {
  const cities = [
    {name: 'LONDON', src: require('../Images/london.png')},
    {name: 'AMSTERDAM', src: require('../Images/amsterdam.png')},
  ];
  return (
    <FlatList
      horizontal
      data={cities}
      pagingEnabled
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Image blurRadius={3} style={styles.img} source={item.src} />
            <Lesgo />
            <View style={styles.choose}>
              <Text style={styles.txt}>Choose</Text>
              <Text style={styles.txt}>your city</Text>
            </View>
            <View style={styles.imgCont}>
              <Image
                style={{height: 300, width: 260, marginTop: 10}}
                source={item.src}
              />
              <Text style={{fontSize: 24}}>{item.name}</Text>
            </View>
            <Pressable
              style={styles.btn}
              onPress={() => setPage(`${item.name}`)}>
              <Text style={{fontSize: 24, color: 'white'}}>
                EXPLORE THE CITY
              </Text>
            </Pressable>
          </View>
        );
      }}
    />
    // <View style={styles.container}>
    //   <Lesgo />
    //   <View style={styles.choose}>
    //     <Text style={styles.txt}>Choose</Text>
    //     <Text style={styles.txt}>your city</Text>
    //   </View>
    //   <View style={styles.imgCont}>
    //     <FlatList
    //       horizontal
    //       pagingEnabled
    //       data={cities}
    //       renderItem={({item}) => {
    //         return (
    //           <View>
    //             <Image
    //               style={{height: 300, width: 260, marginTop: 10}}
    //               source={item.src}
    //             />
    //             <Text style={{fontSize: 24}}>{item.name}</Text>
    //             <Pressable
    //               style={styles.btn}
    //               onPress={() => setPage(`${item.name}`)}>
    //               <Text style={{fontSize: 24, color: 'white'}}>
    //                 EXPLORE THE CITY
    //               </Text>
    //             </Pressable>
    //           </View>
    //         );
    //       }}
    //     />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wt,
  },
  choose: {
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 10,
  },
  txt: {
    fontFamily: 'Times New Roman',
    color: 'black',
    fontSize: 42,
  },
  imgCont: {
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 400,
    width: 300,
    marginTop: 40,
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    width: wt,
    height: ht,
  },
  indicator: {
    marginBottom: -10,
    borderRadius: 10,
    height: 20,
    width: 150,
    backgroundColor: 'white',
  },
  btn: {
    width: 300,
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 60,
    borderColor: 'white',
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
  },
});
