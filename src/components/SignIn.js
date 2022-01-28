// react global
import React, {useState } from 'react';

// utility
import axios from 'axios';
import {SESSION} from '../session.js';

// components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// styling
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'zot-ui X '}
      <Link color="inherit" href="https://github.com/project-zot/zot/">
        project zot
      </Link>{' '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}


export default function SignIn() {
   let [host, setHost] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      host: data.get('host'),
      email: data.get('username'),
      password: data.get('password'),
    });
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //
  //   // TODO:: bind to host
  //   host = "https://aci-zot.cisco.com:5050";
  //
  //   // TODO: fix this
  //   SESSION.host = host;
  //   SESSION.username = username;
  //
  //   // TODO: pass this data to Explore.jsx
  //   axios.get(`${host}/query?query={ImageListWithLatestTag(){Name%20Latest%20Description%20Vendor%20Licenses%20Labels%20Size%20LastUpdated}}`)
  //     .then(response => {
  //       if (response.data && response.data.data) {
  //           // let imageList = response.data.data.ImageListWithLatestTag;
  //           // let imagesData = imageList.map((image) => {
  //           //     return {
  //           //         name: image.Name,
  //           //         latestVersion: image.Latest,
  //           //         tags: image.Labels,
  //           //         description: image.Description,
  //           //         licenses: image.Licenses,
  //           //         size: image.Size,
  //           //         vendor: image.Vendor
  //           //     };
  //           // });
  //           // setData(imagesData);
  //           // setIsLoading(false);
  //           window.location.href = "/home";
  //       }
  //     })
  // }

  const handleClick = (event) => {
    event.preventDefault();

    host = "https://aci-zot.cisco.com:5050";
    // TODO: fix this
    SESSION.host = host;
    SESSION.username = username;

    const apiData = [
      {
          name: 'test-package',
          latestVersion: 'v2.1.0',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Omnia'
      },
      {
          name: 'test-package/1/2/3/4',
          latestVersion: 'v2.4.0',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Onyx'
      },
      {
          name: 'test-package-04',
          latestVersion: '0.4.1',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Oural'
      },
      {
          name: 'test-package',
          latestVersion: 'v2.1.0',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Omnia'
      },
      {
          name: 'test-package/1/2/3/4',
          latestVersion: 'v2.4.0',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Onyx'
      },
      {
          name: 'test-package-04',
          latestVersion: '0.4.1',
          tags: 'ACI',
          description: 'lorem ipsum lorem ipsum loren ipsum',
          licenses: '',
          size: '55660',
          vendor: 'Oural'
      },
    ];

    // TODO: pass apiData data to Explore.jsx
    window.location.href = "/home";

  }



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
           Connect to a zot server instance
         </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="host"
              label="Host"
              name="host"
              autoComplete="host"
              autoFocus
              onInput={ e=>setHost(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onInput={ e=>setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onInput={ e=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
