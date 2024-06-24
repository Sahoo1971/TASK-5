import React from 'react';
import { Button as MuiButton } from '@mui/material';
import './Button.css';

const Button = ({ value, onClick, className }) => {
  return (
    <MuiButton
      className={`button ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </MuiButton>
  );
};

export default Button;
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import './Button.css';

const Button = ({ value, onClick, className }) => {
  return (
    <MuiButton
      className={`button ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </MuiButton>
  );
};

export default Button;
