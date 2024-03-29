// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © Kristina Tsiviliov'}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '50vh',
//       }}
//     >
//       <CssBaseline />
//       <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//         {/* <Typography variant="h2" component="h1" gutterBottom>
          
//         </Typography> */}
//         <Typography style={{color: 'rgb(110, 205, 173)'}} variant="h5" component="h2" gutterBottom>
//           {' "Emerald is a symbol of power and wealth"'}
          
//         </Typography>
//         {/* <Typography variant="body1"></Typography> */}
//       </Container>
//       <Box
//         component="footer"
//         sx={{
//           py: 3,
//           px: 2,
//           mt: 'auto',
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'light'
//               ? theme.palette.grey[200]
//               : theme.palette.grey[800],
//         }}
//       >
//         <Container maxWidth="sm">
//           <Typography variant="body1">
//             Hanna Avia
//           </Typography>
//           <Copyright />
//         </Container>
//       </Box>
//     </Box>
//   );
// }


// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {' © Kristina Tsiviliov'}
//       <Link color="inherit" href="https://www.linkedin.com/in/kristina-tsivilov-861205135/">
//              Linkedin     
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '50vh',
//       }}
      
//     >
//       <CssBaseline />
//       <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//         {/* <Typography variant="h2" component="h1" gutterBottom>
          
//         </Typography> */}
//         <Typography style={{color: 'rgb(110, 205, 173)', textAlign: 'center'}} variant="h5" component="h2" gutterBottom>
//           {' "Emerald is a symbol of power and wealth"'}
          
//         </Typography>
//         {/* <Typography variant="body1"></Typography> */}
//       </Container>
//       <Box
//         component="footer"
//         sx={{
//           py: 3,
//           px: 2,
//           mt: 'auto',
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'light'
//               ? theme.palette.grey[200]
//               : theme.palette.grey[800],
//         }}
//       >
//         <Container maxWidth="sm">
//           <Typography variant="body1">
//             Hanna AviA 
//           </Typography>
//           <Copyright />
//         </Container>
//       </Box>
//     </Box>
//   );
// }


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {' © Kristina Tsiviliov'}
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
      }}
    >
      <CssBaseline />
      <Container
  component="main"
  style={{
    mt: 'auto', // Push the container to the bottom
    mb: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'flex-end', // Align the content to the bottom
    marginTop: '8%',
  }}
  maxWidth="sm"
>
  <Typography style={{ color: 'rgb(110, 205, 173)' }} variant="h5" component="h2" gutterBottom>
    {' "Emerald is a symbol of power and wealth"'}
  </Typography>
</Container>

      <Box
  component="footer"
  style={{
    py: 3,
    px: 2,
    backgroundColor: '#f0f0f0', // Replace with your desired background color
    textAlign: 'center',
    marginTop: 'auto', // This will push the footer to the bottom of its container
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
