import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home';
import LoginPage from 'pages/login';
import SignupPage from 'pages/signup';
import ErrorPage from 'pages/ErrorPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/login/*" element={<LoginPage />} />
        <Route path="/account/signup/*" element={<SignupPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
