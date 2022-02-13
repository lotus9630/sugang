import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, SignupPage, ErrorPage, MajorPage, LiberalPage, BasePage, MyPage } from 'pages';
import { getUser } from 'api/student';
import { useUserDispatch } from 'context/UserContext';

function AppRouter() {
  const dispatch = useUserDispatch();
  const callAPI = async () => {
    const { data } = await getUser();
    if (data) dispatch({ type: 'LOGIN', user: data });
  };

  useEffect(() => {
    callAPI();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/major" element={<MajorPage />} />
        <Route path="/liberal" element={<LiberalPage />} />
        <Route path="/base" element={<BasePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/account/login/*" element={<LoginPage />} />
        <Route path="/account/signup/*" element={<SignupPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
