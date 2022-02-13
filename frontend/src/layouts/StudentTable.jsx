import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from '@mui/material';
import { getAllStudent } from 'api/admin';
import { LoadingButton } from '@mui/lab';
import { deleteStudent } from 'api/admin';

const StudentTable = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    const { data, error } = await getAllStudent();
    if (error) {
      setIsError(true);
      alert('학생 정보를 불러오는 도중 에러가 발생하였습니다');
    }
    setStudentList(data);
    setLoading(false);
  };

  const clickDelete = async (e) => {
    if (window.confirm('해당 과목을 신청하시겠습니까?')) {
      const { error } = await deleteStudent(e.target.name);
      if (error) alert('학생 삭제중 에러가 발생하였습니다');
      else {
        alert('수강신청 취소가 완료되었습니다');
        await callAPI();
      }
    }
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>학생</TableCell>
            <TableCell align="right">학생 번호</TableCell>
            <TableCell align="right">이메일</TableCell>
            <TableCell align="right">학년</TableCell>
            <TableCell align="right">이름</TableCell>
            <TableCell align="right">학과</TableCell>
          </TableRow>
        </TableHead>
        {Array.isArray(studentList) && studentList.length !== 0 && studentList[0].studentNumber && (
          <TableBody>
            {studentList.map((subject) => (
              <TableRow key={subject.studentNumber} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Button variant="contained" color="error" onClick={clickDelete} name={subject.studentNumber}>
                    취소
                  </Button>
                </TableCell>
                <TableCell align="right">
                  {loading ? <LoadingButton loading={true} /> : subject.studentNumber}
                </TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.email}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.grade}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.name}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.majorName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
