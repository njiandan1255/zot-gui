// react global
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

// components
import ImageTile from './ImageTile.jsx';
import Loading from "./Loading";
import Typography from '@mui/material/Typography';
import {Container, Grid, makeStyles} from '@material-ui/core';

// utility
import axios from 'axios';
import api from '../api.js';
import {URL} from '../constants';
import {isEmpty} from 'lodash';
//
import {SESSION} from '../session'

const useStyles = makeStyles((theme) => ({
    gridWrapper: {
        backgroundColor: "#fff",
    }
}));

function Explore ({ host, data, keywords, updateData }) {
    const [isLoading, setIsLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const classes = useStyles();

    // static data
    // useEffect(() => {
    //     const apiData = [
    //         {
    //             name: 'test-package',
    //             latestVersion: 'v2.1.0',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Omnia',
    //             path: 'test-package-04',
    //         },
    //         {
    //             name: 'test-package/1/2/3/4',
    //             latestVersion: 'v2.4.0',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Onyx',
    //             path: 'test-package-04',
    //         },
    //         {
    //             name: 'test-package-04',
    //             latestVersion: '0.4.1',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Oural',
    //             path: 'test-package-04',
    //         },
    //         {
    //             name: 'test-package',
    //             latestVersion: 'v2.1.0',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Omnia',
    //             path: 'test-package-04',
    //         },
    //         {
    //             name: 'test-package/1/2/3/4',
    //             latestVersion: 'v2.4.0',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Onyx',
    //             path: 'test-package-04',
    //         },
    //         {
    //             name: 'test-package-04',
    //             latestVersion: '0.4.1',
    //             tags: 'ACI',
    //             description: 'lorem ipsum lorem ipsum loren ipsum',
    //             licenses: '',
    //             size: '55660',
    //             vendor: 'Oural',
    //             path: 'test-package-04',
    //         },
    //     ];
    //
    //     updateData(apiData);
    // }, []);

    // todo: get credentials from global state
    useEffect(() => {
        const token = btoa("test:test123");
        const cfg = {
          headers: {
            'Authorization': `Basic ${token}`,
          }
        };

        axios.get(`${host}/query?query={ImageListWithLatestTag(){Name%20Latest%20Description%20Vendor%20Licenses%20Labels%20Size%20LastUpdated}}`, cfg)
          .then(response => {
            if (response.data && response.data.data) {
                let imageList = response.data.data.ImageListWithLatestTag;
                let imagesData = imageList.map((image) => {
                    return {
                        name: image.Name,
                        latestVersion: image.Latest,
                        tags: image.Labels,
                        description: image.Description,
                        licenses: image.Licenses,
                        size: image.Size,
                        vendor: image.Vendor
                    };
                });
                updateData(imagesData);
                setIsLoading(false);
            }
          })
          .catch(e => {

          })
    }, [])

    useEffect(() => {
      setIsLoading(false);
    }, []);

    useEffect(() => {
        const filtered = data && data.filter((item) => {
            return (
                isEmpty(keywords) ||
                (item.name && item.name.toLocaleLowerCase().indexOf(filterStr) >= 0 ) ||
                (item.appID && item.appID.toLocaleLowerCase().indexOf(filterStr) >= 0) ||
                (item.appId && item.appId.toLocaleLowerCase().indexOf(filterStr) >= 0)
            )
        });

        setFilteredData(filtered);
    }, [keywords, data]);

    const filterStr = keywords && keywords.toLocaleLowerCase();

    const renderImages = () => {
        return filteredData && filteredData.map((item, index) => {
            return (
                <ImageTile
                    name={item.name}
                    version={item.latestVersion}
                    description={item.description}
                    tags={item.tags}
                    vendor={item.vendor}
                    size={item.size}
                    licenses={item.licenses}
                    key={index}
                    data={item}
                    shown={true}
                />
            );
        });
    }

    return (
        <Container maxWidth="md">
            { isLoading && <Loading /> }
            <Grid container className={classes.gridWrapper}>
            </Grid>
            <div style={{marginTop: 30}}></div>
            {renderImages()}

            {!(filteredData && filteredData.length) && (
                <div>
                    <Typography component="h1">
                        Looks like we don't have anything matching that search. Please try again.
                    </Typography>
                </div>
            )}
        </Container>
    );
}

export default Explore;
