
import {Link} from "react-router-dom";

import {Typography, Badge, AppBar, Toolbar, InputBase} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {makeStyles, alpha} from '@material-ui/core/styles';
import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
    header: {
      display: "flex",
      justifyContent: "space-between",
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

    wrapper: {
      marginTop: 6,
      paddingRight: 20,
    },

}));

function Header() {
  const classes = useStyles();

  return (
      <AppBar position="fixed">
        <Toolbar className={classes.header}>
           <div>
             <Link to="/home" className={classes.icons}>
                <Typography variant="h6">
                {// <div className={classes.wrapper}><img src={logo} className="App-logo" alt="logo" /></div>
                }
                Zot
                </Typography>
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
      </AppBar>
  );
}

export default Header;
