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

class SignInPass extends Component{
    constructor(props) {
        super(props);
        this.state = {
            classes:useStyles(),
            password: "" ,
            url:"http://172.16.1.102:7070/learnapi/v1/authenticate" ,
            redirect:'/'

        }
    }
    handleChange = (event) => {
        this.setState({password:event.target.value})
        console.log(this.state.password)
        console.log(this.props.location.state)
    }
    handleSent = (event) => {
        event.preventDefault();
        const password  = this.state.password;
        axios({
            method: 'post',
            url:this.state.url,
            data:{
                fun_name:"FU_SEC_USER4",
                param_name:["P_USER_NAME", "P_USER_PASSWORD"],
                param_value:[this.props.username, this.state.password]
            }
        })
            .then(response => {
                sessionStorage.setItem("TOKEN_ID", response.data.Table[0].TOKEN_ID);
                sessionStorage.setItem("USER_ID", response.data.Table[0].USER_ID);
                this.props.history.push(this.state.redirect);


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
                            Welcome {this.props.fullName}
                        </Typography>
                        <form className={this.state.classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
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

export default withRouter(SignInPass)