import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const FilterBorrowedBooks = (props) => {
 const  onFilterChange=()=>{
 props.onBookStatusChange();
  }
  return (
    <FormGroup>
      <FormControlLabel control={<Switch onChange={onFilterChange} />} label="Get only free books" />
    </FormGroup>
  );
}
export default FilterBorrowedBooks;
