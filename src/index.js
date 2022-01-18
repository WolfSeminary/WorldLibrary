import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchInput from './SearchBook';
 
ReactDOM.render(
  <React.StrictMode>
    <SearchInput />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
