import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import Search from './Components/Search';


function App() {
  const{books}= useSelector((state) => state.book);
  console.log(books);
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
      <Search/>
      <br></br>
      <p><i>"If you do not like to read, you have not found the right book."  J.K. Rowling</i></p>
      <br></br>
      <AddBook/>
     
    <BookList books={books}/>
      </header>
    </div>
  );
}

export default App;
