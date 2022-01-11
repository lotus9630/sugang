import * as React from 'react';
import { Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import FoundationIcon from '@mui/icons-material/Foundation';
import StarIcon from '@mui/icons-material/Star';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ justifyContent: 'space-between' }}
      >
        <BottomNavigationAction label="전체 과목" icon={<HomeIcon />} />
        <BottomNavigationAction label="전공 과목" icon={<StarIcon />} />
        <BottomNavigationAction label="교양 과목" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="기초 과목" icon={<FoundationIcon />} />
      </BottomNavigation>
    </Container>
  );
}
