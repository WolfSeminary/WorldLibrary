import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControlLabel,
  FormGroup,
  Switch,
  CardActionArea,
} from "@mui/material";


export default function ActionAreaCard(props) {
  const [isFree, setIsFree] = useState(props.book && props.book.status === "free")

  const onStatusChange = () => {
    props.book.status === "free" ? props.book.status = "borrowed" : props.book.status = "free";
    props.onStatusChange(props.book);

  }
  const navigate = useNavigate();
  function onBookClick() {
    return (
      navigate(`/ActionAreaCard/${props.BookInfo}`)
    );
  }
  const handleChange = (event) => {
    setIsFree(event.target.checked);
    onStatusChange();
    event.stopPropagation();
  }
  return (
    props.book ? <Card onClick={onBookClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"

          // image={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo && props.book.volumeInfo.title}

          image={
            props.book.volumeInfo.imageLinks === undefined
              ? ""
              : `${props.book && props.book.volumeInfo && props.book.volumeInfo.imageLinks.thumbnail}`
        }
          alt="green iguana"

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
          onClick={handleChange} />} label={isFree ? "free" : "borrowed"} />
      </FormGroup>
    </Card> : null
  )
}
