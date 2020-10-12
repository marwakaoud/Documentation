import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditModel from '../EditModel/EditModel';
import ShowModel from "../../ShowModel/ShowModel";



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
  const [id, setId] = React.useState(props.app_ID);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent >
          <p gutterBottom variant="h5" component="h2" onClick={props.handelonclick} >
            {props.appName}
            
          </p>
          <p variant="body2" color="textSecondary" component="p">
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <EditModel onClick= {props.handleedit} id = {id}  app = {{APP_ID : props.app_ID , APP_NAME : props.appName , APP_DESC : props.appDesc}}/>
<Fab color="secondary" aria-label="delete" >
  <DeleteIcon onClick= {props.handledelete} />
</Fab>

<ShowModel app = {{APP_ID : props.app_ID , APP_NAME : props.appName , APP_DESC : props.appDesc}}/>

      </CardActions>
    </Card>
  );
}
