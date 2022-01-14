import Header from './Header.jsx'

import {makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

import { useParams, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
  }
}));

const ImageDetails = (data) => {
  const classes = useStyles();

  // TODO:: get url params here (i.e. image name)
  // get data here
  const location = useLocation();
  // const myData = location.state.data;
  // TODO:: get url params here (i.e. image name)
  // const {name} = useParams();

  return (
      <div>
        <Header></Header>
        <div className={classes.container}>
          <div>
            Image Info
          </div>
        </div>
      </div>
  );
}

export default ImageDetails;
