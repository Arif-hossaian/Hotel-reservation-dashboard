import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import useFetch from '../../hooks/useFetch';

export default function HotelCountCard() {
  const { hotels } = useFetch();
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
            Total Hotels
          </Typography>
          <Typography color="text.secondary">{hotels.length}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
