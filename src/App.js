import React from 'react';
import ApolloClient from 'apollo-boost'
import BookList from './components/BookList';
import {ApolloProvider} from '@apollo/react-hooks'
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'http://localhost:4000/',
});
function App() {
  return (
    // <div></div>
    <ApolloProvider client={client} >
      <h1>This is first App</h1>
      <BookList/>
      <AddBook/>
    </ApolloProvider>
  );
}

export default App;
