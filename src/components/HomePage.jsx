// components
import Header from './Header.jsx'
import ExploreHeader from './ExploreHeader.jsx'
import Leftbar from './Leftbar.jsx'
import Rightbar from './Rightbar.jsx'

// styling
import {makeStyles} from '@material-ui/core';
import {Container, Typography, Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        marginTop: 80,
    },
    gridWrapper: {
        backgroundColor: "#fff",
        border: "1px #f2f2f2 dashed",
    },
    pageWrapper: {

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
