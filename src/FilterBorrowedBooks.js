import React,{useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const FilterBorrowedBooks = () => {
  const [bookStatus, setBookStatus] = useState("free");
  const onStatusChange = () => {
    bookStatus === "free" ? setBookStatus("borrowed") : setBookStatus("free");
  }
  return (
    <FormGroup>
      <FormControlLabel control={<Switch onChange={onStatusChange} />} label="Get only free books" />
    </FormGroup>
  );
}
export default FilterBorrowedBooks;
