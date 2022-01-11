import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'AppRouter';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);
