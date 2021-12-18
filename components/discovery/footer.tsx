import React, {useState, useRef, useEffect} from 'react';
import {Image, Animated, Pressable, StyleSheet} from 'react-native';

export const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const wt = useRef(new Animated.Value(67)).current;
  const ht = useRef(new Animated.Value(67)).current;

  useEffect(() => {
    if (expanded) {
      Animated.timing(ht, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(wt, {
        toValue: 350,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    if (!expanded) {
      Animated.timing(ht, {
        toValue: 67,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(wt, {
        toValue: 67,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    console.log(ht, wt);
  }, [expanded, ht, wt]);

  return (
    <Animated.View
      style={[
        {
          height: ht,
          width: wt,
        },
        styles.cont,
      ]}>
      <Pressable
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <Image source={require('../../Images/Group.png')} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'black',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
