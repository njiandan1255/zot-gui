// react global
import { useParams, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// utility
import axios from 'axios';

// components
import Header from './Header.jsx'
import ImageTile from './ImageTile.jsx'
import Tags from './Tags.jsx'
import {Container, Typography, Box, Grid} from '@material-ui/core';

// styling
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        marginTop: 80,
    },
  tile: {
     height: '50vh',
  },
  gridWrapper: {
      padding: theme.spacing(5),
      backgroundColor: "#fff",
      border: "1px #f2f2f2 dashed",
  },
  pageWrapper: {},
}));


function ImageDetails (props) {
  const {host} = props;
  const [imageDetailData, setImageDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // get data from <Link here
  const location = useLocation();
  const myData = location && location.state && location.state.data;

  // get url param from <Route here (i.e. image name)
  const {name} = useParams();

  const classes = useStyles();

  useEffect(() => {
    const {name, version} = myData;
    // const listOfTagsUrl = 'v2/' + name + '/tags/list';
    // const listOfLayersUrl = 'v2/' + name + '/manifests/' + version;
    // const requests = [];

    axios.get(`${host}/query?query={RepoListWithInfo()%20{%20Name%20Manifests%20{Digest%20Tag%20Layers%20{Size%20Digest}}%20}%20}`)
      .then(response => {
        if (response.data && response.data.data) {
            let imageList = response.data.data.RepoListWithInfo;
            let imagesData = imageList.map((image) => {
                return {
                    name: image.Name,
                    tags: image.Manifests,
                };
            });
            setImageDetailData(imagesData);
            setIsLoading(false);
        }
      })
      .catch(() => {
          setImageDetailData({});
      });
  }, [])

  return (
      <div className={classes.pageWrapper}>
        <Header></Header>
        <Container maxWidth="lg" className={classes.container}>
            <Grid container className={classes.gridWrapper}>
                <Grid item md={1} ></Grid>
                <Grid item md={10}>
                    <Box>
                        <ImageTile className={classes.tile}
                           name={myData.name}
                           version={myData.latestVersion}
                           description={myData.description}
                           tags={myData.tags}
                           vendor={myData.vendor}
                           size={myData.size}
                           licenses={myData.licenses}
                           key={myData}
                           size="lg"
                           shown={true}
                        />
                    </Box>
                    <Tags data={imageDetailData} />
                </Grid>
                <Grid item md={1} ></Grid>
            </Grid>
        </Container>
      </div>
  );
}

export default ImageDetails;
