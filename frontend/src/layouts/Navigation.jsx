import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import FoundationIcon from '@mui/icons-material/Foundation';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useUserState } from 'context/UserContext';

const Navigation = ({ pageNumber }) => {
  let navigate = useNavigate();
  const state = useUserState();
  const changePage = (pageNumber) => {
    if (pageNumber === 0) navigate('/');
    else if (pageNumber === 1) navigate('/major');
    else if (pageNumber === 2) navigate('/liberal');
    else if (pageNumber === 3) navigate('/base');
    else if (pageNumber === 4) navigate('/my');
  };
  const [value, setValue] = useState(pageNumber);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, pageNumber) => {
        setValue(pageNumber);
        changePage(pageNumber);
      }}
      sx={{ justifyContent: 'space-between' }}
    >
      <BottomNavigationAction label="전체 과목" icon={<HomeIcon />} />
      <BottomNavigationAction label="전공 과목" icon={<StarIcon />} />
      <BottomNavigationAction label="교양 과목" icon={<MenuBookIcon />} />
      <BottomNavigationAction label="기초 과목" icon={<FoundationIcon />} />
      <BottomNavigationAction label={state.name === 'admin' ? '학생 정보' : '개인 정보'} icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
