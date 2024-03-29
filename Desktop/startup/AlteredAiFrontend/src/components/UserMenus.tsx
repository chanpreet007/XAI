import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function UserMenus() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={6} ></Paper>
      <Paper elevation={6} ></Paper>
      <Paper elevation={6} ></Paper>
    </Box>
  );
}
