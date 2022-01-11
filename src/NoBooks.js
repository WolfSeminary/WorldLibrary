import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/roboto"
import * as React from 'react';
import { Typography } from '@mui/material';
export default function NoBooks() {

  return (
    <Typography id="typography" variant="right" component="h2">
      "Sorry, no available books"
    </Typography>
  )
}

