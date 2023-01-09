import React from 'react'
import Book from './Book';

function BookList({books}) {
    return (
        <div>
           <h4><i>
"I love the way that each book — any book — is its own journey. You open it, and off you go…" Sharon Creech</i></h4> 
    {books.map((el)=><Book key={el.id} book={el}/>)}    
        </div>
    )
}

export default BookList;
