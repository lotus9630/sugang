import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SubjectTable from 'layouts/SubjectTable';
import Navigation from 'layouts/Navigation';
import User from 'layouts/User';
import { getAllSubject } from 'api/subject';

export default function HomePage() {
  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    const { data, error } = await getAllSubject();
    if (error) setIsError(true);
    setSubjectList(data);
    setLoading(false);
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
      <User />
      <Navigation pageNumber={0} />
      {isError ? (
        <h1>데이터 로딩중 에러가 발생하였습니다</h1>
      ) : (
        <SubjectTable subjectList={subjectList} loading={loading} />
      )}
    </Container>
  );
}
