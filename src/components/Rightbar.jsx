import {makeStyles} from '@material-ui/core';
import {Container, Typography} from '@material-ui/core';
import Home from '@mui/icons-material/Home';
import Explore2 from './Explore2.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  }
}));

function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <Explore2/>
    </Container>
  );
}

export default Rightbar;
