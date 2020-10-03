import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.appName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Show Description
      </Fab>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Fab color="info" aria-label="edit">
  <EditIcon />
</Fab>
<Fab color="secondary" aria-label="edit">
  <DeleteIcon />
</Fab>
      </CardActions>
    </Card>
  );
}
