import { Container } from '@mui/material';
import SubjectTable from 'layouts/SubjectTable';
import Navigation from 'layouts/Navigation';
import User from 'layouts/User';

const subjectList = [
  {
    code: 0,
    name: '과목 1',
    type: '전공',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
  {
    code: 1,
    name: '과목 2',
    type: '전공',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
  {
    code: 3,
    name: '과목 3',
    type: '전공',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
];

export default function BasePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
      <User />
      <Navigation pageNumber={3} />
      <SubjectTable subjectList={subjectList} />
    </Container>
  );
}
