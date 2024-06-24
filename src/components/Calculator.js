import React, { useState } from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import './Calculator.css';
import Display from './Display';
import History from './History';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(0);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input); // Note: eval should be used carefully.
        setResult(evalResult);
        setHistory([...history, { input, result: evalResult }]);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '√') {
      setInput(Math.sqrt(eval(input)).toString());
    } else if (value === '^') {
      setInput(input + '**');
    } else if (value === '%') {
      setInput((eval(input) / 100).toString());
    } else if (value === '±') {
      setInput((eval(input) * -1).toString());
    } else if (value === 'MC') {
      setMemory(0);
    } else if (value === 'MR') {
      setInput(input + memory);
    } else if (value === 'M+') {
      setMemory(memory + eval(input));
    } else if (value === 'M-') {
      setMemory(memory - eval(input));
    } else if (value === 'sin') {
      setInput(Math.sin(eval(input)).toString());
    } else if (value === 'cos') {
      setInput(Math.cos(eval(input)).toString());
    } else if (value === 'tan') {
      setInput(Math.tan(eval(input)).toString());
    } else {
      setInput(input + value);
    }
  };

  const handleDeleteHistoryItem = (index) => {
    setHistory(history.filter((_, i) => i !== index));
  };

  return (
    <Paper elevation={3} className="calculator">
      <Typography variant="h4" align="center" gutterBottom>
         Calculator
      </Typography>
      <Display input={input} result={result} />
      <Grid container spacing={1}>
        {['MC', 'MR', 'M+', 'M-', 'sin', 'cos', 'tan', '(', ')', '√', '^', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', '%', '±'].map((item) => (
          <Grid item xs={3} key={item}>
            <Button variant="contained" fullWidth onClick={() => handleClick(item)}>
              {item}
            </Button>
          </Grid>
        ))}
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" fullWidth onClick={() => handleClick('C')}>
            C
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" fullWidth onClick={() => handleClick('DEL')}>
            DEL
          </Button>
        </Grid>
      </Grid>
      <History history={history} onDelete={handleDeleteHistoryItem} />
    </Paper>
  );
};

export default Calculator;
