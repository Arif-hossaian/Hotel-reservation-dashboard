import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import useFetch from '../../hooks/useFetch';

export default function AdminCountCard() {
  const { adminList } = useFetch();
  //console.log(adminList.length);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" component="div">
            Total Admins
          </Typography>
          <Typography color="text.secondary">{adminList.length + 1}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
