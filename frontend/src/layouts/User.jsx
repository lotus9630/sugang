import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'context/UserContext';

const User = () => {
  let navigate = useNavigate();
  const state = useUserState();
  const dispatch = useUserDispatch();

  const changePage = (e) => {
    if (e.target.name === 'login') navigate('/account/login');
    else if (e.target.name === 'signup') navigate('/account/signup');
    else if (e.target.name === 'logout') dispatch({ type: 'LOGOUT' });
  };
  return (
    <Box sx={{ display: 'flex', position: 'absolute', right: 20, top: -50 }}>
      {state.studentNumber ? (
        <>
          <Box sx={{ mr: 3 }}>학생번호: {state.studentNumber}</Box>
          <Box sx={{ mr: 3 }}>{state.email}</Box>
          <Box sx={{ mr: 3 }}>{state.name}</Box>
          <Box sx={{ mr: 3 }}>{state.majorName}</Box>
          <Button variant="contained" onClick={changePage} name="logout">
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" sx={{ mr: 2 }} onClick={changePage} name="login">
            로그인
          </Button>
          <Button variant="contained" onClick={changePage} name="signup">
            회원 가입
          </Button>
        </>
      )}
    </Box>
  );
};

export default User;
