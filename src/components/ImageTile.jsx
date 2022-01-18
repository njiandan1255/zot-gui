// react global
import {Link, useParams} from "react-router-dom";

// utility
import api from '../api.js';

// components
import {Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';

// styling
import {makeStyles} from '@material-ui/core';
import avatar from '../avatar.svg';

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(2),
  },
  cardLg: {
      marginBottom: theme.spacing(2),
      height: 200,
  },
  avatar: {
      objectFit: "contain",
  },
  cardBtn: {
    height: "100%",
  },
  media: {
    padding: theme.spacing(2),
    maxWidth: 150,
    borderRadius: '50px',
    marginTop: 20,
  },
  mediaLg: {
    maxWidth: 220,
    borderRadius: '50px',
  },
  content: {
     textAlign: "left",
  },
}));

function ImageTile(props) {
  const classes = useStyles();
  const {name, path, description, version, vendor, size, tags, licenses} = props;

  return (
    <Link to={`/image/${path}`} state={{data: props}} className={props.size === "lg" ? 'card-link' : ''}>
        <Card variant="outlined" className={props.size === "lg" ? classes.cardLg : classes.card}>
            <CardActionArea className={classes.cardBtn}>
                <div style={{display: 'flex'}}>
                    <CardMedia classes={{
                        root: props.size === "lg" ? classes.mediaLg : classes.media,
                        img: classes.avatar,
                    }}
                      component="img"
                      height= {props.size === "lg" ? 130 : 80}
                      image={avatar}
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
