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

export default function Book({ info, onStatusChange }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            alt={info.volumeInfo && info.volumeInfo.title}
            image={
              info.volumeInfo.imageLinks === undefined
                ? ""
                : `${info.volumeInfo.imageLinks.thumbnail}`
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.BookName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.BookInfo}
            </Typography>
          </CardContent>
        </CardActionArea>
        <FormGroup>
          <FormControlLabel control={<Switch checked={info.status == "borrowed"}
            onChange={(e) => {
              e.stopPropagation()
              onStatusChange(info.id);
            }} />} label={info.status == "free" ? "free" : "borrowed"} />
        </FormGroup>
      </Card>
    </>
  )
}
