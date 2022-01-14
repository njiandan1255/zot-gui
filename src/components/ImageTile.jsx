import {makeStyles} from '@material-ui/core';
import {Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import api from '../api.js';
import logo from '../zot-in-the-box.png';

import {Link, useParams} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(2),
  },
  media: {
    maxWidth: 150,
    borderRadius: '50px',
  },
  content: {
     textAlign: "left",
  },
}));

function ImageTile(props) {
  const classes = useStyles();
  const {name, description, version, vendor, size, tags, licenses} = props;

  // TODO: add name as url param
  // <Link to={`/image/${name}`}>
  // send props to link destination
  return (
    <Link to={`/image/${name}`} state={{ data: props }}>
        <Card variant="outlined" className={classes.card}>
            <CardActionArea>
                <div style={{display: 'flex'}}>
                    <CardMedia className={classes.media}
                      component="img"
                      height="140"
                      image={logo}
                    />
                    <CardContent className={classes.content}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {vendor || 'vendor'}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {version}
                      </Typography>
                      <Typography variant="body2">
                        {name + " is a linux distribution that's composed entirely of free and open source software."}
                      </Typography>
                    </CardContent>
                </div>
            </CardActionArea>
        </Card>
    </Link>
  );
}

export default ImageTile;
