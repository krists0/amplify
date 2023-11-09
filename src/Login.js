// import React, { useState, useEffect } from 'react';
// import { Auth } from 'aws-amplify';
// import { Container, Typography, TextField, Button, Paper, Grid, CircularProgress } from '@mui/material';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true); // Set loading state

//     try {
//       await Auth.signIn(username, password);
//       // Redirect to the main page after successful login
//       // You can use a routing library like React Router for this.
//     } catch (error) {
//       console.error('Error signing in:', error);
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <Container>
//       <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//         <Grid item xs={12} sm={8} md={6} lg={4}>
//           <Paper elevation={3} style={{ padding: '2rem' }}>
//             <Typography variant="h4" align="center" gutterBottom>
//               Login
//             </Typography>
//             <TextField
//               label="Username"
//               fullWidth
//               margin="normal"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               margin="normal"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleLogin}
//               disabled={isLoading} // Disable the button during the loading state
//             >
//               {isLoading ? <CircularProgress size={24} /> : 'Login'}
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Typography, TextField, Button, Paper, Grid, CircularProgress } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      await Auth.signIn(username, password);
      // Redirect to the main page after successful login
      // You can use a routing library like React Router for this.
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      await Auth.signUp({
        username,
        password,
      });
      setIsSignUp(true); // Set a flag to show confirmation UI
    } catch (error) {
      console.error('Error signing up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmSignUp = async () => {
    setIsLoading(true);

    try {
      await Auth.confirmSignUp(username, confirmationCode);
      // Now the user is confirmed, you can redirect or show a success message.
    } catch (error) {
      console.error('Error confirming sign up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              {isSignUp ? 'Confirm Sign Up' : 'Login'}
            </Typography>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {!isSignUp && (
              <>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? <CircularProgress size={24} /> : 'Login'}
                </Button>
              </>
            )}
      
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;


/**
 *       {isSignUp && (
              <>
                <TextField
                  label="Confirmation Code"
                  fullWidth
                  margin="normal"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleConfirmSignUp}
                  disabled={isLoading}
                >
                  {isLoading ? <CircularProgress size={24} /> : 'Confirm'}
                </Button>
              </>
            )}
            {!isSignUp && (
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleSignUp}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}
              </Button>
            )}
 */