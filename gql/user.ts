import { gql } from '@apollo/client';

export const GET_USER = gql`
  query findByOneUser($field: String, $search: String) {
    findByOneUser(field: $field, search: $search) {
      city
      country
      email
      emailVerified
      gender
      lastName
      name
      phoneNumber
      photoUrl
      status
      uid
      address
      hasRestaurant
      accountCompleted
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: InputUser!) {
    updateUser(input: $input) {
      uid
      city
      country
      email
      emailVerified
      gender
      lastName
      name
      phoneNumber
      photoUrl
      status
      address
      hasRestaurant
      accountCompleted
    }
  }
`;
