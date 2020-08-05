import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//Components
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

//ApolloClient setup
const client = new ApolloClient({
  uri : 'http://localhost:5000/graphql'
});

function App() {
  return (
    	<ApolloProvider client={client}>
      		<div className="App">
          		<h1>My name is vignesh</h1>
          		<BookList />
			<AddBook />
      		</div>
    	</ApolloProvider>
  );
}

export default App;
