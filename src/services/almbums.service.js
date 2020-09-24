import { gql } from "@apollo/client";

export function listarAlbums(limit = 10) {
  return gql`
    query {
      albums (options: { paginate: { limit: ${limit} } }) {
        data {
          id
          title
          user {
            id
            name
          }
          photos(options: { paginate: { limit: 1 } }) {
            data {
              thumbnailUrl
            }
          }
        }
      }
    }
  `;
}

export function eliminarAlbum(idAlbum) {

}

