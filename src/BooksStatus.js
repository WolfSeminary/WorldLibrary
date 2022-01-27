import { useState } from "react";
import { Button } from "@mui/material";
export default function () {
    const BooksStatus = (book) => {
        const [bookStatus,setBookStatus] = useState({id:book.id,status:"free"})
        return (
          <>
            <Button variant="outlined">Library Status</Button>
          </>
        );
      };
}