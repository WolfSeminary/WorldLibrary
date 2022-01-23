import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ActionAreaCard(props) {
  const [isFree, setIsFree] = React.useState(true)
  const handleChange = (event) => {
    setIsFree(event.target.checked);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.BookImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.BookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.BookInfo}
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
