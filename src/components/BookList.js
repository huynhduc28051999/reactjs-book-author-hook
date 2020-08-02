import React, { useState } from 'react';
import {useQuery} from '@apollo/react-hooks'
import {GET_BOOKS} from './../queries/Queries'
import BookDetail from './BookDetail';

const BookList = () => {
  const [id, setId] = useState("");
  const {loading, error, data} = useQuery(GET_BOOKS);
    if(loading) return <div>Loading ...</div>
    if(error) return <div>Error ....</div>
    return (
      <div>
        {data.books.map(value =>{
          return <li key={value.id} onClick={() => {
            setId(value.id);
          }}>
            {value.name}<br/>
            {value.genre}
          </li>
        })}
        <BookDetail id={id}/>
      </div>
    )
}

export default BookList;