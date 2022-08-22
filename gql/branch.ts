import { gql } from '@apollo/client';

export const GET_ALL_BRANCH = gql`
  query findAllBranchs(
    $limit: Int
    $page: Int
    $sort: String
    $offset: Int
    $search: String
    $populate: String
    $field: String
  ) {
    findAllBranchs(
      limit: $limit
      page: $page
      sort: $sort
      offset: $offset
      search: $search
      populate: $populate
      field: $field
    ) {
      docs {
        address
        commune
        country
        email
        _id
        idBranch
        idRestaurant
        isActive
        phone
        state
        status
      }
      hasNextPage
      limit
      page
      pagingCounter
      totalDocs
      totalPages
    }
  }
`;
