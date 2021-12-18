import React from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

type activityType = {
  title: string;
  rate: number;
  description: string;
  category: {
    name: string;
  };
  image: {
    url: string;
  };
};

type activitiesType = {
  activityCollection: {
    items: activityType[];
  };
};

export const Display = ({chosen}: {chosen: string}) => {
  const ACTIVITIES = gql`
  query{
    activityCollection(where: {category: {name: "${chosen}"}}){
      items{
        title
        rate
        category{
          name
        }
        image{
          url
        }
      }
    }
  }
`;
  const {data} = useQuery<activitiesType>(ACTIVITIES);
  console.log(data?.activityCollection.items);
  return data ? (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        data={data.activityCollection.items}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.rate}>
                <Text style={{color: 'white', fontSize: 18}}>
                  ☆ {item.rate}
                </Text>
              </View>
              <Image style={styles.img} source={{uri: item.image.url}} />
              <View style={styles.textCont}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    height: 200,
    width: 300,
  },
  title: {
    color: 'white',
    fontSize: 28,
    alignSelf: 'flex-end',
  },
  textCont: {
    marginTop: -80,
    marginLeft: 20,
    width: 280,
    height: 70,
    flexDirection: 'row',
  },
  rate: {
    height: 20,
    marginBottom: -20,
    zIndex: 1,
    width: 50,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
