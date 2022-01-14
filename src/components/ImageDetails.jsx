import Header from './Header.jsx'
import Tags from './Tags.jsx'
import ImageTile from './ImageTile.jsx'

import {makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Container, Typography, Box} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

import { useParams, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
  },
  tile: {
     height: '50vh',
  }
}));

const ImageDetails = (data) => {
  const classes = useStyles();

  // get data here
  const location = useLocation();
  const myData = location && location.state && location.state.data;
  // get url params here (i.e. image name)
  const {name} = useParams();
  debugger

  return (
      <div>
        <Header></Header>
        <div className={classes.container}>
        <Box sx={{ height: '40%' }}>
            <ImageTile className={classes.tile}
                name={myData.name}
                version={myData.latestVersion}
                description={myData.description}
                tags={myData.tags}
                vendor={myData.vendor}
                size={myData.size}
                licenses={myData.licenses}
                key={myData}
            />
        </Box>
            <Tags />
        </div>
      </div>
  );
}

export default ImageDetails;
