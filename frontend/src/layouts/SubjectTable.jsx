import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
const SubjectTable = ({ subjectList, loading }) => {
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
        <TableBody>
          {subjectList.map((subject) => (
            <TableRow key={subject.subjectCode} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Button variant="contained">신청</Button>
              </TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectCode}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectName}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.subjectKind}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.majorName}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.maxStudent}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.currentStudent}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.minGrade}</TableCell>
              <TableCell align="right">{loading ? <LoadingButton loading={true} /> : subject.maxGrade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubjectTable;
