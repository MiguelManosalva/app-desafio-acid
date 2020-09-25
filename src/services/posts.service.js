import { gql } from "@apollo/client";

export function listarPosts(limit = 12) {


  return gql`
    query {
      posts(options: { paginate: { limit: ${limit} } }) {
        data {
          id
          title
          body
          user {
            id
            name
            username
            email
          }
          comments {
            data {
              id
              name
              email
              body
            }
          }
        }
      }
    }
  `;
}

export function eliminarPost(idPost) {}
