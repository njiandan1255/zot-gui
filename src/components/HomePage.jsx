import Header from './Header.jsx'
import ExploreHeader from './ExploreHeader.jsx'
import Leftbar from './Leftbar.jsx'
import Rightbar from './Rightbar.jsx'

import {makeStyles} from '@material-ui/core';
import {Container, Typography, Grid} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    gridWrapper: {
        backgroundColor: "#fff",
    },
    pageWrapper: {
        backgroundColor: "#F8F8F8",
        backgroundImage: "url('../background.jpg')",
    },
    tile: {
      width: '100%',
    }
}));

function HomePage() {
  const classes = useStyles();

  return (
      <div className={classes.pageWrapper}>
        <Header></Header>
        <ExploreHeader></ExploreHeader>
        <Container maxWidth="lg" className={classes.container}>
            <Grid container className={classes.gridWrapper}>
                <Grid item className={classes.tile}>
                    <Rightbar/>
                </Grid>
            </Grid>
        </Container>
      </div>
  );
}

export default HomePage;
