import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SubjectTable from 'layouts/SubjectTable';
import Navigation from 'layouts/Navigation';
import User from 'layouts/User';
import { getAllSubject } from 'api/subject';

export default function HomePage() {
  const [subjectList, setSubjectList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      // setLoading(true);
      const { data, error } = await getAllSubject();
      // if (error) setError(true);
      // setLoading(false);
      // setSubjectList(data);
    };
    // callAPI();
  }, [subjectList, error, loading]);
  return (
    <Container maxWidth="lg" sx={{ mt: 12, position: 'relative' }}>
      <User />
      <Navigation pageNumber={0} />
      <SubjectTable subjectList={subjectList} />
    </Container>
  );
}
