import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard(props) {
  const navigate = useNavigate();
  function onBookClick() {
    return (
      navigate(`/ActionAreaCard/${props.BookInfo}`)
    );
  }
  const [isFree, setIsFree] = React.useState(true)
  const handleChange = (event) => {
    setIsFree(event.target.checked);
  }
  return (
    <Card onClick={onBookClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.volumeInfo.imageLinks.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.BookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.BookInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <FormGroup>
        <FormControlLabel control={<Switch checked={isFree}
          onChange={handleChange} />} label={isFree ? "free" : "borrowed"} />
      </FormGroup>
    </Card>
  );
}
