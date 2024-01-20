import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © Kristina Tsiviliov'}
      <Link color="inherit" href="https://www.linkedin.com/in/kristina-tsivilov-861205135/">
        Linkedin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        {/* <Typography variant="h2" component="h1" gutterBottom>
          
        </Typography> */}
        <Typography style={{color: 'rgb(110, 205, 173)'}} variant="h5" component="h2" gutterBottom>
          {' "Emerald is a symbol of power and wealth"'}
          
        </Typography>
        {/* <Typography variant="body1"></Typography> */}
      </Container>
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
          <Typography variant="body1">
            Hanna AviA 
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}