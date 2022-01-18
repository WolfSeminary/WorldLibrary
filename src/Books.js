import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function FormRow(props) {
  const arrBooks = props.arrBooks;
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>{arrBooks[0].status}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{arrBooks[1].status}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{arrBooks[2].status}</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Books() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) => res.json()).then((res) => {debugger;setBooks(res.items.map(book => ({id:book.id,status:"free"})))})
  }, [])

  let sliceArrBook;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {books.map((book, index) => {
          if(index < books.length - 4){
             sliceArrBook = books.slice(index, index + 3);
          index += 3;
          return (
            <Grid container item spacing={3}>
              <FormRow arrBooks={sliceArrBook} />
            </Grid>
          );
          }
         
        })}
      </Grid>
    </Box>
  );
}