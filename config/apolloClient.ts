import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

const httpLik = createUploadLink({
  uri: 'http://localhost:5001/irestaurant-359100/us-central1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token_user_irestaurant');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLik)
});

export default client;
