import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Navigation, StudentTable, SubjectTable, User } from 'layouts';
import { getStudentSubjects } from 'api/student';
import { useUserState } from 'context/UserContext';

export default function MyPage() {
  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const state = useUserState();
  const showSubjectList = async () => {
    setLoading(true);
    const { data, error } = await getStudentSubjects();
    if (error) setIsError(true);
    setSubjectList(data);
    setLoading(false);
  };
  useEffect(() => {
    showSubjectList();
  }, []);
  if (state.name === 'admin') {
    return (
      <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
        <User />
        <Navigation pageNumber={4} />
        <StudentTable />
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
        <User />
        <Navigation pageNumber={4} />
        {isError ? (
          <h1>로그인 중 에러가 발생하였습니다</h1>
        ) : (
          <SubjectTable subjectList={subjectList} loading={loading} myPage showSubjectList={showSubjectList} />
        )}
      </Container>
    );
  }
}
