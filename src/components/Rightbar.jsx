import {makeStyles} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';
import Home from '@mui/icons-material/Home';
import Explore from './Explore.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  }
}));

function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <Explore/>
    </Container>
  );
}

export default Rightbar;
