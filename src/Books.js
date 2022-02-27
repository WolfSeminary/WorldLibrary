import { useState, useEffect, } from 'react';
import { Paper, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Book from './Book'
import BooksStatus from './BooksStatus';
import FilterBorrowedBooks from './FilterBorrowedBooks';
import AppBarComponent from './AppBarComponent';
import FetchBooks from './FetchBooks ';
import BooksStatusModal from "./BooksStatusModal";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Books() {
  const [books, setBooks] = useState([])
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const [freeBooks, setFreeBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("search");
  const [libraryStatus, setLibraryStatus] = useState("all");
  const [differentTopic, setDifferentTopic] = useState('andriod');
  const navigate = useNavigate();
  const onTopicChange = (params) => {
    setDifferentTopic(params);
  }
  function fetchDifferentBooks() {
    debugger;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${differentTopic || 'andriod'}&&maxResults=40`)
      .then((res) => res.json()).then(res => {
        setBooks(res.items.map(book => ({ ...book, status: "free" })))
        setShouldModalOpen(false)
        setLibraryStatus("all");
        filterFree();
      }
      )
  }

  const onSearch = (value) => {
    setSearchTerm(value);
  }
  const getBooksStatus = () => {
    setShouldModalOpen(true)
  }

  const onStatusChange = (id) => {
    let allbooks = books.map(item => { return item.id == id ? { ...item, status: item.status === "free" ? "borrowed" : "free" } : item });
    setBooks(allbooks);
  }

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) =>  res.json())
      .then((res) => {
        debugger;
        setBooks(res.items.map(book => ({ ...book, status: "free" })))
        setShouldModalOpen(false)
        setLibraryStatus("all");
      })
  }, [])

  useEffect(() => {
    filterFree();
  }, [books])

  const filterFree = () => {
    setFreeBooks(books.filter(book => book.status === "free"));
  }

  const onFilterChange = () => {
    setLibraryStatus(libraryStatus === "free" ? "all" : "free")
    console.log(libraryStatus)
  }

  const onBookClick = (info) => {
    navigate(`/book/${info.id}`, { state: info })
  }
  return (<>
    <AppBarComponent onSearch={onSearch} />
    <BooksStatus onClick={getBooksStatus} />
    <BooksStatusModal open={shouldModalOpen} onClose={() => { setShouldModalOpen(false) }} />
    <FilterBorrowedBooks onChange={onFilterChange} />
    <FetchBooks onChange={onTopicChange} onClick={fetchDifferentBooks} />
    <Grid container spacing={1}>
      {libraryStatus === "free" ? freeBooks.map((book, index) =>
        <Grid key={index} item xs={4}>
          <div onClick={(e) => {
            onBookClick(book)
          }}>
            <Book book={book} onStatusChange={onStatusChange} />
          </div>
        </Grid>
      ) :
        books.map((book, index) =>
          <Grid key={index} item xs={4}>
            <div onClick={() => {
              onBookClick(book)
            }}>
              <Book book={book} onStatusChange={onStatusChange} />
            </div>
          </Grid>
        )}
    </Grid>
  </>
  );
}