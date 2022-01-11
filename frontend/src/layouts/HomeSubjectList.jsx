import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const HomeSubjectList = ({ subjectList }) => {
  console.log(subjectList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>과목 코드</TableCell>
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
            <TableRow key={subject.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{subject.code}</TableCell>
              <TableCell align="right">{subject.name}</TableCell>
              <TableCell align="right">{subject.type}</TableCell>
              <TableCell align="right">{subject.major}</TableCell>
              <TableCell align="right">{subject.maxStudent}</TableCell>
              <TableCell align="right">{subject.currentStudent}</TableCell>
              <TableCell align="right">{subject.currentStudent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomeSubjectList;
