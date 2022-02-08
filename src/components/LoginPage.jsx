// react global
import React, { useEffect, useState } from 'react';

// components
import Header from './Header.jsx'
import SignIn from './SignIn.js'
import {Grid} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';

// styling
import {makeStyles} from '@material-ui/core';
import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingTop: 50,
    backgroundColor: "#fff",
  }
}));

function LoginPage({ host, updateHost }) {
  const classes = useStyles();

  return (
      <div>
        <Header></Header>
        <div className={classes.container}>
          <SignIn host={host} updateHost={updateHost} />
        </div>
      </div>
  );
}

export default LoginPage;
