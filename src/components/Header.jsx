
import {Link, useLocation} from "react-router-dom";

import ExploreHeader from "./ExploreHeader";
import {Typography, Badge, AppBar, Toolbar, InputBase} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Avatar from '@mui/material/Avatar';

import {makeStyles, alpha} from '@material-ui/core/styles';
import logo from '../zot-in-the-box.png';


const useStyles = makeStyles((theme) => ({
    header: {
      display: "flex",
        paddingLeft: 0,
      justifyContent: "space-between",
        height: 50,
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
    },

    input: {
      color: "white",
      marginLeft: theme.spacing(1),
    },

    icons: {
      color: 'white',
    },
    appName: {
      marginLeft: 10,
      marginTop: 8,
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      marginLeft: 10,
    }

}));

function Header() {
  const classes = useStyles();
  const path = useLocation().pathname;

  return (
      <AppBar position="fixed">
        <Toolbar className={classes.header}>
           <div>
             <Link to="/home" className={classes.icons}>
               <div className={classes.wrapper}>
                   <Avatar src={logo} className={classes.logo} alt="logo"></Avatar>
                   <Typography className={classes.appName}
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}> Zot
                   </Typography>
                </div>
             </Link>
           </div>
            <div className={classes.search}>
              <SearchIcon/>
              <InputBase placeholder="Search packages..." className={classes.input}/>
            </div>
            <div>
            <Link to="/login" className={classes.icons}>
              <Badge color="secondary">
                <AccountTreeIcon/>
              </Badge>
              </Link>
            </div>
        </Toolbar>
        { path !== '/login' && <ExploreHeader /> }
      </AppBar>
  );
}

export default Header;
