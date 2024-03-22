import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function BackDrop() {
    return (
        <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#A9A9A9', height: '100vh' }} />
      </Container>
    </React.Fragment>
    )
}

export default BackDrop