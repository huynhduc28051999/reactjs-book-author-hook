import {gql} from 'apollo-boost'

const GET_BOOKS = gql`
  {
    books{
      id,
      name,
      genre
    }
  }
`

const GET_AUTHORS = gql`
  {
    authors{
      id,
      name
    }
  }
`

const GET_BOOK_DETAILS = gql`
  query getBook($id: ID){
    book(id: $id){
      name,
      genre,
      author{
        name,
        age
      }
    }
  }
`

const ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      genre
    }
  }
`

export {GET_BOOKS,GET_BOOK_DETAILS, GET_AUTHORS, ADD_BOOK};