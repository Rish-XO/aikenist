import React from 'react';
import { Button } from '@mui/material';

function Payment() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary">Pay Now</Button>
    </div>
  );
}

export default Payment;

