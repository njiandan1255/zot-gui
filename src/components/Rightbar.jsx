// components
import {Container, Typography} from '@material-ui/core';
import Home from '@mui/icons-material/Home';
import Explore from './Explore.jsx';

// styling
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
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
