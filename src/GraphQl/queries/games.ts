import gql from 'graphql-tag'

const search = gql`
  query search($term: String!) {
    search(term: $term) {
      id
      name
      url
      releaseDate
      platforms
    }
  }
`

export {
  search
}
