import Header from './Header.jsx'
import ImageDetailsContent from './ImageDetailsContent.jsx'

import {makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
  }
}));

function ImageDetailsPage(props) {
  const classes = useStyles();
  // TODO:: get name here

  return (
      <div>
        <Header></Header>
        <div className={classes.container}>
          <div>
            Package Info
          </div>
        </div>
      </div>
  );
}

export default ImageDetailsPage;
