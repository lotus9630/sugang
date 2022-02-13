import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { registerSubject, deleteSubject } from 'api/student';

const SubjectTable = ({ subjectList, loading, myPage, showSubjectList }) => {
  const clickRegister = async (e) => {
    const subjectCode = e.target.name;
    if (window.confirm('해당 과목을 신청하시겠습니까?')) {
      const { error } = await registerSubject(subjectCode);
      if (error) alert(error.message);
      else alert('신청이 완료되었습니다');
    }
  };

  const clickDelete = async (e) => {
    const subjectCode = e.target.name;
    if (window.confirm('해당 과목을 신청하시겠습니까?')) {
      const { error } = await deleteSubject(subjectCode);
      if (error) alert(error.message);
      else {
        alert('수강신청 취소가 완료되었습니다');
        await showSubjectList();
      }
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>수강신청</TableCell>
            <TableCell align="right">과목 코드</TableCell>
            <TableCell align="right">과목명</TableCell>
            <TableCell align="right">과목 종류</TableCell>
            <TableCell align="right">전공</TableCell>
            <TableCell align="right">수강 제한인원</TableCell>
            <TableCell align="right">현재 수강 인원</TableCell>
            <TableCell align="right">최소 학년</TableCell>
            <TableCell align="right">최대 학년</TableCell>
          </TableRow>
        </TableHead>
        {Array.isArray(subjectList) && subjectList.length !== 0 && subjectList[0].subjectCode && (
          <TableBody>
            {subjectList.map((subject) => (
              <TableRow key={subject.subjectCode} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  {myPage ? (
                    <Button variant="contained" color="error" onClick={clickDelete} name={subject.subjectCode}>
                      취소
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={clickRegister} name={subject.subjectCode}>
                      신청
                    </Button>
                  )}
                </TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectCode}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectName}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectKind}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.majorName}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.maxStudent}</TableCell>
                <TableCell align="right">
                  {loading ? <LoadingButton loading={true} /> : subject.currentStudent}
                </TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.minGrade}</TableCell>
                <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.maxGrade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default SubjectTable;
