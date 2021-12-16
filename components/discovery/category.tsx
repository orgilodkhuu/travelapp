import React, {useState} from 'react';
import {FlatList, Pressable, Text, StyleSheet, View} from 'react-native';
import {Display} from './display';

import {useQuery, gql} from '@apollo/client';

const CATEGORIES = gql`
  query {
    categoryCollection {
      items {
        name
      }
    }
  }
`;

type CategoryType = {
  name: string;
};

type CategoriesType = {
  categoryCollection: {
    items: CategoryType[];
  };
};

export const Category = () => {
  const [chosen, setChosen] = useState('Restaurants');

  // useEffect(() => {
  // }, [chosen])

  const {data} = useQuery<CategoriesType>(CATEGORIES);

  return data ? (
    <View>
      <FlatList
        horizontal
        data={data.categoryCollection.items}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return (
            <Pressable
              style={[
                styles.item,
                {
                  backgroundColor: `${
                    chosen === item.name ? '#D5E5E2' : '#F4F1EC'
                  }`,
                },
              ]}
              onPress={() => {
                setChosen(item.name);
              }}>
              <Text>{item.name}</Text>
            </Pressable>
          );
        }}
      />
      <Display chosen={chosen} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
