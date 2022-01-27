import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
<<<<<<< HEAD
import Book from './Book';
import FilterBorrowedBooks from './FilterBorrowedBooks';
=======
import Book from './Book'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
>>>>>>> origin/master

export default function Books() {
  const [books, setBooks] = useState([])
  const [bookStatus, setBookStatus] = useState("free");
  const [freeBooks ,setFreeBooks] = useState([]) 
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) => res.json())
      .then((res) => {
        const newBooks = res.items.map(book => ({ ...book, status: "free" }));
        setBooks(newBooks)
        setFreeBooks(newBooks);
      })
  }, [])
  
const bookChange = (book) =>{
  console.log(books);
 setFreeBooks(books.filter(book => book.status=="free"));
 console.log(freeBooks);  
}
  return (<>
    <FilterBorrowedBooks onBookStatusChange = {() => bookStatus==="free"?setBookStatus("borrowed"):setBookStatus("free")}/>
    <Grid container spacing={1}>
      {bookStatus === "free"? freeBooks.map((book, index) =>
        <Grid key={index} item xs={4}>
          <Book book={book} bookStatusChange = {(b) => bookChange(book)} />
        </Grid>
      ):
      books.map((book, index) =>
        <Grid key={index} item xs={4}>
          <Book book={book} bookStatusChange = {(b) => bookChange(book)} />
        </Grid>
      )}
    </Grid></>
  );
}