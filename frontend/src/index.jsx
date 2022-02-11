import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { UserProvider } from 'context/UserContext';

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <CssBaseline />
      <AppRouter />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById('root'),
);
