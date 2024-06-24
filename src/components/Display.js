import React from 'react';
import { Box, Typography } from '@mui/material';
import './Display.css';

const Display = ({ input, result }) => {
  return (
    <Box className="display">
      <Typography variant="h5" className="input">
        {input || '0'}
      </Typography>
      <Typography variant="h6" className="result">
        {result || '0'}
      </Typography>
    </Box>
  );
};

export default Display;
