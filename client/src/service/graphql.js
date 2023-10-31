import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      _id
      title
      description
      authors
      image
      link
    }
  }
`;

export default GET_BOOKS;
