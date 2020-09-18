import React , {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { withRouter } from "react-router-dom";


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
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class SignInSide extends Component{
    constructor(props) {
        super(props);
        this.state = {
            classes:useStyles(),
            name: "" ,
            url:"http://172.16.1.102:7070/learnapi/v1/authenticate" ,
            redirect:'/loginpass'

        }
    }
    handleChange = (event) => {
        this.setState({name:event.target.value})
        console.log(this.state.name)
    }
    handleSent = (event) => {
        event.preventDefault();
        const usernamme  = this.state.name;
        axios({
            method: 'post',
            url:this.state.url,
            timeout: 4000,    // 4 seconds timeout
            data:{
                fun_name:"FU_SEC_USER3",
                param_name:["P_USER_NAME"],
                param_value:[usernamme]
            }
        })
            .then(response => {
                if (response.data.Table[0].SEC_STATUS === "doneuser"){
                    console.log(response.data)
                    let state =  {username : this.state.name , full_name:response.data.Table[0].USER_DESC }
                    this.props.history.push(this.state.redirect,state);

                }else {
                    alert('zeze')
                }

            })
            .catch(error => console.error('timeout exceeded'))

    }
    render() {
        return (
            <Grid container component="main" className={this.state.classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={this.state.classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={this.state.classes.paper}>
                        <Avatar className={this.state.classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={this.state.classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="Username"
                                autoComplete="Username"
                                autoFocus
                                onChange = {this.handleChange}
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.state.classes.submit}
                                onClick={this.handleSent}
                            >
                                Sign In
                            </Button>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }

}

export default withRouter(SignInSide)