import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($input: InputUser!) {
    registerUser(input: $input) {
      uid
    }
  }
`;
