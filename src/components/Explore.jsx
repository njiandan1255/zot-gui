// react global
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

// components
import ImageTile from './ImageTile.jsx';

// utility
import axios from 'axios';
import api from '../api.js';
import {URL} from '../constants';
import {isEmpty} from 'lodash';


class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            searchValue: ''
        };

    }

    componentDidMount() {
        // axios.get(`https://aci-zot.cisco.com:5050/query?query={ImageListWithLatestTag(){Name%20Latest%20Description%20Vendor%20Licenses%20Labels%20Size%20LastUpdated}}`)
        //   .then(response => {
        //     if (response.data && response.data.data) {
        //         let imageList = response.data.data.ImageListWithLatestTag;
        //         let imagesData = imageList.map((image) => {
        //             return {
        //                 name: image.Name,
        //                 latestVersion: image.Latest,
        //                 tags: image.Labels,
        //                 description: image.Description,
        //                 licenses: image.Licenses,
        //                 size: image.Size,
        //                 vendor: image.Vendor
        //             };
        //         });
        //         this.setState({data: imagesData, isLoading: false});
        //     }
        //   })

          const tile1 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }
          const tile2 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }
          const tile3 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }
          const tile4 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }
          const tile5 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }
          const tile6 =  {
              name: "name",
              latestVersion: "latest version",
              tags: "dummy",
              description: "dummy",
              licenses: "dummy",
              size: "66",
              vendor: "vendor"
          }

          this.setState({data: [tile1, tile2, tile3, tile4, tile5, tile6], isLoading: false});
    }

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

    renderImages = () => {
        const {data, searchValue} = this.state;
        const filterStr = searchValue && searchValue.toLocaleLowerCase();

        const cmp = data && data.map((item, index) => {
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
                />

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

    render() {
        const {data, searchValue} = this.state;
        return (
          <div>
            {this.renderImages()}
          </div>
        );
    }
}

// Explore.propTypes = {
//     onRefresh: PropTypes.any,
// };

export default Explore;
