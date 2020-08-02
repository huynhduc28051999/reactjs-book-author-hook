import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK_DETAILS } from './../queries/Queries';

function BookDetail({id}) {
    const {loading, error, data} = useQuery(GET_BOOK_DETAILS,{
      variables: {id},
    });
    
    if (loading) return <div>Loading ...</div>
    if (error) return <div>Please Choose the book ...</div>
    // console.log(data)
    const Book = data.book;
  return (
    <div>
      <ul>
        <li>{Book.name}</li>
        <li>{Book.genre}</li>
        <ul>
          Some thing for this author: 
            <li>{Book.author.name}</li>
            <li>{Book.author.age}</li>
        </ul>
      </ul>
    </div>
  )
}

export default BookDetail;