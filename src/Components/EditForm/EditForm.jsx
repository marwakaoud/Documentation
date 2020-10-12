import React ,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:'white',
    color: 'blue',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: 'black',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditForm(props) {
  const classes = useStyles();
  const [app_name, setAppName] = useState("");
  const [app_desc, setAppdesc] = useState("");
  const [url, setUrl] = useState("http://172.16.1.102:6060/api/v1/crud");
  const [data, setData] = useState("");

  const handlesubmit = ( event) => {
    console.log(props)
        event.preventDefault();
    axios({
        method: 'POST',
        url:url,
        data:{
            fun_name:"PRO_UPDATE_DOC_APPLICATIONS",
            param_name:['P_APP_ID ,P_APP_NAME','P_APP_DESC'],
            param_value:[props.app.APP_ID , app_name , app_desc],
        }
      })
      .then(response => {
             console.log(response.data)    
         setData(response.data )
        
        })
      .catch(error => console.error('timeout exceeded'))    
    };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                defaultValue={props.app.APP_NAME}
          onChange={e => setAppName(e.target.value)}
                fullWidth
                id="app_name"
                label="Application Name"
                name="app_name"
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               defaultValue={props.app.APP_DESC}
               onChange={e => setAppdesc(e.target.value)}
                variant="outlined"
                fullWidth
                name="desc"
                label="Description"
                type="text"
                id="desc"

                />
            </Grid>
          </Grid>
          <Button
          onClick = {props.handleEdit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Edit
          </Button>
        </form>
      </div>
    
    </Container>
  );
}