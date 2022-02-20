import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export const FilterBorrowedBooks = ({ onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch onChange={onChange} />} label="Get only free books" />
    </FormGroup>
  );
}
export default FilterBorrowedBooks;
