import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import Home from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  item: {

  },
}));

function Leftbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>Filter section</Typography>
        </div>
    </Container>
  );
}

export default Leftbar;
