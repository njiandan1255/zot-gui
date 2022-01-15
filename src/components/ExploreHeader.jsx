
import {Link} from "react-router-dom";

import {Typography, Badge, AppBar, Toolbar, InputBase} from '@material-ui/core';
import {Tabs, Tab} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {makeStyles, alpha} from '@material-ui/core/styles';
import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
    exploreHeader: {
      backgroundColor: "yellow",
      minHeight: 150,
    },

}));

function ExploreHeader() {
  const classes = useStyles();

  return (
      <div className="exploreHeader">Explore</div>
  );
}

export default ExploreHeader;
