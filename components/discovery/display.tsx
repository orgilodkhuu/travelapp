import React from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

type activityType = {
  title: string;
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
    <FlatList
      data={data.activityCollection.items}
      keyExtractor={item => item.title}
      renderItem={({item}) => {
        console.log(item.image.url);
        return (
          <View style={styles.container}>
            <Image style={styles.img} source={{uri: item.image.url}} />
            <Text>{item.title}</Text>
          </View>
        );
      }}
    />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 200,
    height: 200,
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 150,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
});
