import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useThemeProps } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function ActionAreaCard({ book }) {
=======
export default function ActionAreaCard(props) {
<<<<<<< HEAD
  const [isFree, setIsFree] = useState(props.book.status === "free")

  const onStatusChange = () => {
    ;
    props.book.status === "free" ? props.book.status = "borrowed" : props.book.status = "free";
    props.bookStatusChange(props.book);
  }
=======
  const navigate = useNavigate();
  function onBookClick() {
    return (
      navigate(`/ActionAreaCard/${props.BookInfo}`)
    );
  }
>>>>>>> origin/master
  const [isFree, setIsFree] = React.useState(true)
>>>>>>> origin/master
  const handleChange = (event) => {
    ;
    setIsFree(event.target.checked);
    onStatusChange();
  }
  return (
    <Card onClick={onBookClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
<<<<<<< HEAD
=======
<<<<<<< HEAD
          // image={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo && props.book.volumeInfo.title}
=======
>>>>>>> origin/master
          image={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : `${book.volumeInfo.imageLinks.thumbnail}`
        }
          alt="green iguana"
>>>>>>> origin/master
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.book.BookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.book.BookInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <FormGroup>
        <FormControlLabel control={<Switch checked={isFree} 
          onChange={handleChange} />} label={isFree ? "free" : "borrowed"} />
      </FormGroup>
    </Card>
  )
}
