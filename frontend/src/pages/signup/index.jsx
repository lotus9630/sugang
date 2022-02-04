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

const theme = createTheme();

export default function SignupPage() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirm: data.get('password-confirm'),
      grade,
    });
  };

  const [grade, setGrade] = useState('');

  const gradeChange = (event) => {
    setGrade(event.target.value);
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
                value={grade}
                label="학년"
                onChange={gradeChange}
              >
                <MenuItem value={1}>1학년</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4}>4학년</MenuItem>
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
