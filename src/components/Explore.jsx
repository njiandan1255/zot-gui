// react global
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

// components
import ImageTile from './ImageTile.jsx';
import Loading from "./Loading";
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
        padding: 0,
        backgroundColor: "#fff",
    }
}));

function Explore () {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');


    const classes = useStyles();

    // useEffect(() => {
    //     axios.get(`https://aci-zot.cisco.com:5050/query?query={ImageListWithLatestTag(){Name%20Latest%20Description%20Vendor%20Licenses%20Labels%20Size%20LastUpdated}}`)
    //       .then(response => {
    //         if (response.data && response.data.data) {
    //             let imageList = response.data.data.ImageListWithLatestTag;
    //             let imagesData = imageList.map((image) => {
    //                 return {
    //                     name: image.Name,
    //                     latestVersion: image.Latest,
    //                     tags: image.Labels,
    //                     description: image.Description,
    //                     licenses: image.Licenses,
    //                     size: image.Size,
    //                     vendor: image.Vendor
    //                 };
    //             });
    //             setData(imagesData);
    //             setIsLoading(false);
    //         }
    //       })
    // }, [])

    // TODO: get host from global state
    // const host = SESSION.host;

    useEffect(() => {
      const apiData = [
        {
            name: 'test-package',
            latestVersion: 'v2.1.0',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Omnia',
            path: 'test-package-04',
        },
        {
            name: 'test-package/1/2/3/4',
            latestVersion: 'v2.4.0',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Onyx',
            path: 'test-package-04',
        },
        {
            name: 'test-package-04',
            latestVersion: '0.4.1',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Oural',
            path: 'test-package-04',
        },
        {
            name: 'test-package',
            latestVersion: 'v2.1.0',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Omnia',
            path: 'test-package-04',
        },
        {
            name: 'test-package/1/2/3/4',
            latestVersion: 'v2.4.0',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Onyx',
            path: 'test-package-04',
        },
        {
            name: 'test-package-04',
            latestVersion: '0.4.1',
            tags: 'ACI',
            description: 'lorem ipsum lorem ipsum loren ipsum',
            licenses: '',
            size: '55660',
            vendor: 'Oural',
            path: 'test-package-04',
        },
      ];

      setData(apiData);
      setIsLoading(false);
    }, [])

    const filterStr = searchValue && searchValue.toLocaleLowerCase();

    const renderImages = () => {
        const cmp = data && data.map((item, index) => {
            return (

                <ImageTile
                    name={item.name}
                    path={item.path}
                    version={item.latestVersion}
                    description={item.description}
                    tags={item.tags}
                    vendor={item.vendor}
                    size={item.size}
                    licenses={item.licenses}
                    key={index}
                    shown={isEmpty(searchValue) ||
                      (item.displayName && item.displayName.toLocaleLowerCase().indexOf(filterStr) >= 0 ) ||
                      (item.appID && item.appID.toLocaleLowerCase().indexOf(filterStr) >= 0) ||
                      (item.appId && item.appId.toLocaleLowerCase().indexOf(filterStr) >= 0)}
                />

            );
            // TODO: use this for search bar
            // return (
            //     <ImageTile
            //        name={item.name}
            //           path={item.path}
            //           version={item.latestVersion}
            //           description={item.description}
            //           tags={item.tags}
            //           vendor={item.vendor}
            //           size={item.size}
            //           licenses={item.licenses}
            //           key={index}
            //           data={item}
            //           shown={isEmpty(searchValue) ||
            //             item.displayName.toLocaleLowerCase().indexOf(filterStr) >= 0 ||
            //             (item.appID && item.appID.toLocaleLowerCase().indexOf(filterStr) >= 0) ||
            //             (item.appId && item.appId.toLocaleLowerCase().indexOf(filterStr) >= 0)}
            //         />
            // );
        });
        return cmp;
    }

    return (
        <Container maxWidth="md">
            { isLoading && <Loading /> }
            <Grid container className={classes.gridWrapper}>
            </Grid>
            {renderImages()}
        </Container>
    );
}

export default Explore;
