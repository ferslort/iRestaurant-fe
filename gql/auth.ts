import { gql } from '@apollo/client';

export const AUT_USER = gql`
  mutation authUser($input: InputAuth!) {
    authUser(input: $input)
  }
`;

export const GET_USER = gql`
  query findByOneUser($field: String, $search: String) {
    findByOneUser(field: $field, search: $search) {
      name
      lastName
    }
  }
`;
