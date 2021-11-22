import React, {useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Likha = ({date}) => {
    const {user} = useAuth();
    const [likha, setLikha] = useState([]);

    useEffect(()=>{
        const url = `https://dry-peak-44721.herokuapp.com/likha?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLikha(data))
    },[date])
    return (
        <div>
            <h2>{likha.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="pa pappa pa">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">ki ki polsi</TableCell>
            <TableCell align="right">na kisu na</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {likha.map((row) => (
            <TableRow
            //   key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.date} */}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{row.UsWritings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Likha;
