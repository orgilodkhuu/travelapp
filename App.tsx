import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Landing} from './components/landingPage';
import {Select} from './components/selectingPage';
import {Discover} from './components/discovery/discovery';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  fetch,
  uri: 'https://graphql.contentful.com/content/v1/spaces/y0vql4lgwa04',
  headers: {
    Authorization: 'Bearer q9eJqpPqdgKU4wfjztDngADtDij5aFcMiY41xo-YX3c',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => {
  const [page, setPage] = useState<string>('landing');
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {page === 'landing' && <Landing setPage={setPage} />}
        {page === 'select' && <Select setPage={setPage} />}
        {page !== 'landing' && page !== 'select' && <Discover name={page} />}
      </View>
    </ApolloProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
