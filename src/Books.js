import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Book from './Book';

export default function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.items.map(book => ({ ...book, status: "free" })))
      })
  }, [])

  return (
    <Grid container spacing={1}>
      {books.map((book, index) =>
        <Grid key={index} item xs={4}>
          <Book book={book} />
        </Grid>
      )}
    </Grid>
  );
}