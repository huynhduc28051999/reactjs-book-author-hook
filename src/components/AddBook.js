import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/Queries';

const AuthorsList = () =>{
  const {loading, error, data} = useQuery(GET_AUTHORS);
  if(loading) return <option>Loading ...</option>
  if(error) return <option></option>
  return (
    data.authors.map(author => {
      return <option key={author.id} value={author.id}>{author.name}</option>
    })
  )
}
const AddBook = () =>{
  const [authorId, setAuthorId] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [addBook, {data}] = useMutation(ADD_BOOK);
  const handleSubmit = (e) =>{
    e.preventDefault();
    addBook({variables: {name,genre,authorId},refetchQueries: [{query: GET_BOOKS}]});
  }
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input 
          type="text" 
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input 
          type="text" 
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={e => setAuthorId(e.target.value)}
        >
            <option>Select author</option>
            {AuthorsList()}
        </select>
      </div>
      <button>+</button>

    </form>
  )
}

export default AddBook;