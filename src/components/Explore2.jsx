// react global
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Container, Grid, makeStyles} from '@material-ui/core';


// components
import ImageTile from './ImageTile.jsx';

// utility
import axios from 'axios';
import api from '../api.js';
import {URL} from '../constants';
import {isEmpty} from 'lodash';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    gridWrapper: {
        backgroundColor: "#fff",
    }
}));

function Explore () {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const classes = useStyles();

    useEffect(() => {
        axios.get(`https://aci-zot.cisco.com:5050/query?query={ImageListWithLatestTag(){Name%20Latest%20Description%20Vendor%20Licenses%20Labels%20Size%20LastUpdated}}`)
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
                setData(imagesData);
                setIsLoading(false);
            }
          })
    }, [])

    //
    // onRefresh = () => {
    //     this.setState({formError: {code: '', text: ''}});
    //     this.getImagesApi();
    // };
    //
    // onSearch = (event) => {
    //     this.setState({
    //         searchValue: event.target.value
    //     });
    // };

    const filterStr = searchValue && searchValue.toLocaleLowerCase();

    const renderImages = () => {


        const cmp = data && data.map((item, index) => {
            return (

                <ImageTile
                    name={'name'}
                    version={'latest version'}
                    description={'description'}
                    tags={'tags'}
                    vendor={'vendor'}
                    size={'size'}
                    licenses={'licenses'}
                    key={index}
                />

                // <ImageTile
                //     name={item.name}
                //     version={item.latestVersion}
                //     description={item.description}
                //     tags={item.tags}
                //     vendor={item.vendor}
                //     size={item.size}
                //     licenses={item.licenses}
                //     key={index}
                // />

            );
            // use this instead
            // return (
            //     <ImageTileLarge
            //         {...this.props}
            //         name={item.name}
            //         version={item.latestVersion}
            //         description={item.description}
            //         tags={item.tags}
            //         key={item.id}
            //         data={item}
            //         shown={isEmpty(searchValue) ||
            //             item.displayName.toLocaleLowerCase().indexOf(filterStr) >= 0 ||
            //             (item.appID && item.appID.toLocaleLowerCase().indexOf(filterStr) >= 0) ||
            //             (item.appId && item.appId.toLocaleLowerCase().indexOf(filterStr) >= 0)}
            //     />
            // );
        });
        return cmp;
    }

    return (
        <Container maxWidth="md">
            <Grid container className={classes.gridWrapper}>
            </Grid>
            {renderImages()}
        </Container>
    );
}

// Explore.propTypes = {
//     onRefresh: PropTypes.any,
// };

export default Explore;
