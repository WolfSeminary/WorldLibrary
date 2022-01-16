import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BookInfo = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <Stack direction="row" spacing={2}>
        <Button onClick="navigate(-1)" variant="outlined" startIcon={<ArrowBackIcon />}>
          Back to Books
        </Button>
      </Stack>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Book Info
      </Typography>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <label>Title: </label>{props.title}
        <label>Author: </label>{props.authors}
        <label>Publisher: </label>{props.publisher}
        <label>Published Date: </label>{props.publishedDate}
        <label>Description: </label>{props.description}
        <label>Num Of Pages: </label>{props.pageCount}
        <label>Language : </label>{props.language}
      </CardContent>
    </Card>)
}
export default BookInfo;
