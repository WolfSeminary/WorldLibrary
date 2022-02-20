import './App.css';
import Books from "./Books";
import BookInfo from './BookInfo';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Books />} />
        <Route path="/book/:id" element={<BookInfo />} />
      </Routes>
    </div>
  );
}


