import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';
import { emailConfirm, passwordConfirm } from 'utils/validation';
import { emailOverlap, signup } from 'api/auth';

const theme = createTheme();

const majorNumber = {
  1: '기계공학과',
  2: '생명공학과',
  3: '전자공학과',
  4: '컴퓨터공학과',
  5: '화학공학과',
};
export default function SignupPage() {
  let navigate = useNavigate();
  const [grade, setGrade] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const queryData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      grade,
      majorName: majorNumber[major],
    };
    if (!emailConfirm(queryData.email)) {
      alert('이메일 형식이 잘못되었습니다');
      return;
    }

    if (await emailOverlap(queryData.email)) {
      alert('이미 가입되어 있는 이메일입니다');
      return;
    }

    if (!passwordConfirm(queryData.password, data.get('password-confirm'))) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    const result = await signup(queryData);
    if (result) {
      alert('회원가입이 완료되었습니다');
      navigate('/');
    } else {
      alert('회원가입 중 에러가 발생하였습니다');
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'grade') setGrade(event.target.value);
    else if (event.target.name === 'major') setMajor(event.target.value);
  };

  const changePage = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HomeIcon sx={{ fontSize: 60, cursor: 'pointer' }} color="primary" onClick={changePage} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth name="name" label="이름" />
            <TextField margin="normal" required fullWidth label="이메일 주소" name="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="비밀번호" type="password" />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password-confirm"
              label="비밀번호 확인"
              type="password"
            />
            <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
              <InputLabel id="demo-simple-select-label">학년</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="grade"
                value={grade}
                label="학년"
                onChange={handleChange}
              >
                <MenuItem value={1}>1학년</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4}>4학년</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
              <InputLabel id="demo-simple-select-label">학과</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="major"
                value={major}
                label="학과"
                onChange={handleChange}
              >
                <MenuItem value={1}>기계공학과</MenuItem>
                <MenuItem value={2}>생명공학과</MenuItem>
                <MenuItem value={3}>전자공학과</MenuItem>
                <MenuItem value={4}>컴퓨터공학과</MenuItem>
                <MenuItem value={5}>화학공학과</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
