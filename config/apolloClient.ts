import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { auth } from './firebase';

const httpLik = createUploadLink({
  uri: 'http://localhost:5001/irestaurant-359100/us-central1/graphql'
});

const authLink = setContext(async (_, { headers }) => {
  const tokenUser = await auth.currentUser?.getIdToken();

  return {
    headers: {
      ...headers,
      Authorization: tokenUser ? `Bearer ${tokenUser.replace(/"/gi, '')}` : ''
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLik)
});

export default client;
