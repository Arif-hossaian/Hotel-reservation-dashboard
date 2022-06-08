import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { userColumns } from '../../utilities/userColumns';

const UserDataTable = () => {
  const { list, isDataLoading, userCount } = useFetch();
  //console.log(list);

  return (
    <div style={{ height: 300, width: '100%' }}>
      {/* {list.map((x, i) => (
        <div key={i}>
          {x.isAdmin === true ? <p>{`Admin`}</p> : <p>{`User`}</p>}
        </div>
      ))} */}
      {userCount}
      {isDataLoading ? (
        'loading'
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {userColumns.map((column, i) => (
                  <TableCell key={i}>{column.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row._id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.country}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {row.isAdmin === true ? 'Admin' : 'User'}
                  </TableCell>

                  <TableCell align="center">{row.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserDataTable;
