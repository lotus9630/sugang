import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SubjectTable from 'layouts/SubjectTable';
import Navigation from 'layouts/Navigation';
import User from 'layouts/User';
import { getLiberalSubject } from 'api/subject';

export default function LiberalPage() {
  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      setLoading(true);
      const { data, error } = await getLiberalSubject();
      if (error) setIsError(true);
      setSubjectList(data);
      setLoading(false);
    };
    callAPI();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
      <User />
      <Navigation pageNumber={2} />
      {isError ? (
        <h1>데이터 로딩중 에러가 발생하였습니다</h1>
      ) : (
        <SubjectTable subjectList={subjectList} loading={loading} />
      )}
    </Container>
  );
}
