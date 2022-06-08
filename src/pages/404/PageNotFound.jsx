import React from 'react';
import { Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'block',
        }}
      >
        <div>Ops!! Page not found</div>
        <div>
          <Link to="/">
            <Button variant="outlined" color="error">
              Go to Home Page
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PageNotFound;
