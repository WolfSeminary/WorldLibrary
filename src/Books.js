import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Book from './Book';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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