import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';




const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>

                <CardContent>
                    <p gutterBottom variant="h5" component="h2">
                        {props.Name}
                    </p>

                </CardContent>
            </CardActionArea>
            <CardActions>

                <IconButton  onClick={() => { alert('clicked') }} >
                    <DeleteIcon size="small" color="primary" />
                </IconButton>


                <IconButton  onClick={() => { alert('clicked') }}>
                    <EditIcon size="small" color="primary" />
                </IconButton>

                <IconButton  onClick={() => { alert('clicked') }}>
                    <DescriptionIcon size="small" color="primary" />
                </IconButton>

            </CardActions>
        </Card>
    );
}
export default MediaCard;