import Header from './Header.jsx'
import Leftbar from './Leftbar.jsx'
import Rightbar from './Rightbar.jsx'

import {makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';

import logo from '../zot-in-the-box.png';

const useStyles = makeStyles((theme) => ({

}));

function HomePage() {
  const classes = useStyles();

  return (
      <div>
        <Header></Header>
        <Grid container>
          {
            // add package filters here
            // <Grid item sm={2}>
            //   <Leftbar/>
            // </Grid>
          }
          <Grid item sm={12}>
            <Rightbar/>
          </Grid>
        </Grid>
      </div>
  );
}

export default HomePage;
