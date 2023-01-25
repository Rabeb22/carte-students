import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 700,
          height: 400,
        },
      }}
    >
      
      <Paper elevation={24} >
      <img style={{ height: "300px", width:"300px", borderRadius: "100%", margin: "0px 15px" }} src="https://avatars.githubusercontent.com/u/119300806?v=4" alt=""></img>

      </Paper>
    </Box>
  );
}