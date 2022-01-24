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

function ImageDetails () {
  const [data, setData] = useState({});
  const [imageDetailData, setImageDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();

  // get data from <Link here
  const location = useLocation();
  const myData = location && location.state && location.state.data;
  // get url param from <Route here (i.e. image name)
  const {name} = useParams();

  useEffect(() => {
    const {name, version} = myData;
    const listOfTagsUrl = 'v2/' + name + '/tags/list';
    const listOfLayersUrl = 'v2/' + name + '/manifests/' + version;
    const requests = [];

    Promise.all([axios.get(`https://aci-zot.cisco.com:5050/${listOfTagsUrl}`),axios.get(`https://aci-zot.cisco.com:5050/${listOfLayersUrl}`)])
        .then((response) => {
            const {tags} = response[0] && response[0].data;
            let tagsData = tags.map((tag) => {
                return {
                    tagID: tag,
                };
            });

            const {layers} = response[1] && response[1].data;
            let layersData = layers.map((layer) => {
                return {
                    name: '-',
                    layerID: layer.digest,
                    size: layer.size
                };
            });

            const imageDetailData = {
               tags: tagsData,
               layers: layersData
             };

            setImageDetailData(imageDetailData);
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
