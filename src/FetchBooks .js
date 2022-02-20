import { Button, TextField } from "@mui/material";

export default function FetchBooks({ onChange, onClick }) {
    return (
        <>
            <Button variant="outlined" id="Fetch-Books-btn" onClick={onClick}>Fetch Books</Button>
            <TextField id="outlined-basic" variant="outlined" onChange={(e) => onChange(e.target.value)} />
        </>
    );
}
