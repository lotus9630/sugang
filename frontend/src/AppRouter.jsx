import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';
import ErrorPage from 'pages/Error';
import MajorPage from 'pages/Major';
import LiberalPage from 'pages/Liberal';
import BasePage from 'pages/Base';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/major" element={<MajorPage />} />
        <Route path="/liberal" element={<LiberalPage />} />
        <Route path="/base" element={<BasePage />} />
        <Route path="/account/login/*" element={<LoginPage />} />
        <Route path="/account/signup/*" element={<SignupPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
