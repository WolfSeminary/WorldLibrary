import { Button } from "@mui/material";
export default function BooksStatus({ onClick }) {
  return (
    <>
      <Button variant="outlined" onClick={onClick}>Library Status</Button>
    </>
  );
}