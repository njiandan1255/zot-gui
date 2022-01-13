import Header from './Header.jsx'
import SignIn from './SignIn.js'

import {makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
  }
}));

function LoginPage() {
  const classes = useStyles();

  return (
      <div>
        <Header></Header>
        <div className={classes.container}>
          <SignIn />
        </div>
      </div>
  );
}

export default LoginPage;
