import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent' 
import Typography from '@mui/material/Typography';
const BookInfo=(props)=>{
return <Card sx={{ maxWidth: 345 }}className="card">
<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
Book Info    
  </Typography>
  <CardContent>
      <label>Title: </label>{props.title}
      <label>Author: </label>{props.authors}
      <label>Publisher: </label>{props.publisher}
      <label>Published Date: </label>{props.publishedDate}
      <label>Description: </label>{props.description}
      <label>Num Of Pages: </label>{props.pageCount}
      <label>Language : </label>{props.language }

  </CardContent>
</Card>
}
export default BookInfo;