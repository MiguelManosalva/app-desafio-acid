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

export function crearPost(data) {}

export function actualizarPost(data) {
  console.log("###data:", data);
  return gql`
      mutation (
        $id: ID!,
        $input: UpdatePostInput!
      ) {
        updatePost(id: ${data.variables.id}, input: ${data.variables.body}) {
          id
          body
        }
      }
`;
}

export const UPDATE_POST = gql`
  mutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`;

export function eliminarPost(idPost) {}
