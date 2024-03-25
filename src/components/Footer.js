// import React from "react";
// import { Typography } from "@mui/material";

// const BtmFooter = () => (
//     <footer className="footer">
//         <Typography 
//         sx={{
//             color: "white",
//             fontWeight: "bold",
//             fontSize: 25,
//             textAlign: "center",
//             padding: "5px",
//             textDecoration: 'underline'
//         }}>HOURS OF OPERATION   
//         </Typography>
//         <Typography
//         sx={{
//             color: "white",
//             fontWeight: "lightest",
//             fontSize: 14,
//             textAlign: "center",
//             justifyContent: 'space-between'     
//         }}> Mon - Sat | 9.30am - 5.00pm
//         </Typography>
//         <Typography
//         sx={{
//             color: "white",
//             fontWeight: "lightest",
//             fontSize: 14,
//             textAlign: "center",
//             justifyContent: 'space-between' 
//         }}> 60 Mollinsburn Street
//             <br></br>
//             Glasgow
//             <br></br>
//             G21 4SF
//         </Typography>
//     </footer>
// );

// export default BtmFooter;

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://one3media.co.uk/">
        One3Media
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline /> 
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" float='left'>
              One3Media Photography
            </Typography>
            <Copyright /> 
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}