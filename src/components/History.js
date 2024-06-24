import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './History.css';

const History = ({ history, onDelete }) => {
  return (
    <Box className="history">
      <Typography variant="h6">History</Typography>
      {history.map((item, index) => (
        <Box key={index} className="history-item">
          <Typography variant="body1">{item.input}</Typography>
          <Typography variant="body1">{item.result}</Typography>
          <IconButton
            aria-label="delete"
            size="small"
            color="secondary"
            onClick={() => onDelete(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default History;
