import {
  CardContent,
  CardMedia, Card,
  Typography,
  Stack,
  Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from "react-router-dom";

export default function BookInfo() {
  let navigate = useNavigate();
  const location = useLocation();
  const info = location.state;
  console.log(info);
  return (<>
    <Button onClick={() => { navigate(-1) }} variant="outlined" startIcon={<ArrowBackIcon />}>
      Back to Books
  </Button>
    <Card sx={{ maxWidth: 345 }} className="card">
      <Stack direction="row" spacing={2}>
      </Stack>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Book Info
      </Typography>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={info.volumeInfo.imageLinks.thumbnail}
          alt="green iguana"
        />
        <label>Title: {info.volumeInfo.title}</label>
        <label>Author: {info.volumeInfo.authors}</label>
        <label>Publisher: {info.volumeInfo.publisher}</label>
        <label>Published Date: {info.volumeInfo.publishedDate}</label>
        <label>Description: {info.volumeInfo.description}</label>
        <label>Num Of Pages: {info.volumeInfo.pageCount}</label>
        <label>Language : {info.volumeInfo.language}</label>
      </CardContent>
    </Card>
  </>)
}

