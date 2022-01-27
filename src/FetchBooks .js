import { useState } from "react";

function FetchBooks() {
    const [differentTopic, setDifferentTopic] = useState('');
    const onTopicChange = (params) => {
        setDifferentTopic(params);
    }
    return (
        <>
            <Button variant="outlined" id="Fetch-Books-btn">Fetch Books</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => onTopicChange(e.target.value)} />
        </>
    );
}

export default FetchBooks;