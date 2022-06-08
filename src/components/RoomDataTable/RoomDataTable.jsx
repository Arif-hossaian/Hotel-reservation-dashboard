import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { roomColumns } from '../../utilities/userColumns';
import useFetch from '../../hooks/useFetch.js';

const RoomDataTable = () => {
  const { rooms, isDataLoading } = useFetch();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Room List</h2>
        <div style={{ marginTop: '20px' }}>
          <Button variant="outlined">Add Room</Button>
        </div>
      </div>
      <div style={{ height: 300, width: '100%' }}>
        {isDataLoading ? (
          'loading'
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {roomColumns.map((column, i) => (
                    <TableCell key={i}>{column.headerName}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rooms?.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {row._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.desc}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.price}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.maxPeople}
                    </TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default RoomDataTable;
