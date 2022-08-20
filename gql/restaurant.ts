import { gql } from '@apollo/client';

export const CREATE_RESTAURANT = gql`
  mutation insertRestaurant($input: InputRestaurant!) {
    insertRestaurant(input: $input) {
      bussinessName
    }
  }
`;

export const GET_RESTAURANT = gql`
  query findByOneRestaurant($search: String, $id: ID, $field: String) {
    findByOneRestaurant(search: $search, id: $id, field: $field) {
      address
      bussinessName
      commune
      country
      email
      fantasyName
      phone
      state
      isActive
      status
      uidUser
      idRestaurant
      category
      city
      verified
      logo
    }
  }
`;
