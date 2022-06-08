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
import { hotelColumns } from '../../utilities/userColumns';
import useFetch from '../../hooks/useFetch';

const HotelDataTable = () => {
  const { hotels, isDataLoading, hotelCount } = useFetch();
  //console.log(hotels);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Hotel List</h2>
        {hotelCount}
        <div style={{ marginTop: '20px' }}>
          <Button variant="outlined">Add Hotel</Button>
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
                  {hotelColumns.map((column, i) => (
                    <TableCell key={i}>{column.headerName}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {hotels?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {row._id}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      <img
                        src={row.photos[0]}
                        alt="hotel_picture"
                        height={70}
                        width={70}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.city}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.address}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.distance}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.desc}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.cheapestPrice}
                    </TableCell>
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

export default HotelDataTable;
