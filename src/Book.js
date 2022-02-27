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
  const [isFree, setIsFree] = useState(props.book.status === "free")

  const onStatusChange = () => {
    ;
    props.book.status === "free" ? props.book.status = "borrowed" : props.book.status = "free";
    props.bookStatusChange(props.book);
  }
  const navigate = useNavigate();
  function onBookClick() {
    return (
      navigate(`/ActionAreaCard/${props.BookInfo}`)
    );
  }
  const [isFree, setIsFree] = React.useState(true)
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

          // image={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo && props.book.volumeInfo.title}

          image={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : `${book.volumeInfo.imageLinks.thumbnail}`
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
          onChange={handleChange} />} label={isFree ? "free" : "borrowed"} />
      </FormGroup>
    </Card>
  )
}
