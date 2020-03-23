import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';	
import { withStyles } from '@material-ui/core/styles';
import { Spring } from "react-spring/renderprops";
import Username from "./Username_Animation";
import { Transition, animated } from 'react-spring/renderprops'
import './styles.css'



const styles = theme => ({
  root: {
    height: '50vh',
    width: '120vh',
    margin: 'auto',
    marginTop: '100px',
    maxHeight: '20%'
    
  },
  image: {
    backgroundImage: 'url(https://cdn.glitch.com/47ec4157-60ef-4337-b3ea-206405c3fe25%2FUpdated_Splash_Now.png?v=1584316040099)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginTop:'10px',
    marginLeft: '10px',
  },
  example: {
    align: 'left',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  hover: {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }	
});


const pages = [
  style => (
    <animated.div style={{ ...style, backgroundImage: 'url(https://cdn.glitch.com/47ec4157-60ef-4337-b3ea-206405c3fe25%2FPotential%20Splash%20Edited%201.png?v=1582740580028)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, backgroundImage: 'url(https://cdn.glitch.com/47ec4157-60ef-4337-b3ea-206405c3fe25%2FSplash%203.1.png?v=1582225974518)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>

    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, backgroundImage: 'url(https://cdn.glitch.com/47ec4157-60ef-4337-b3ea-206405c3fe25%2FFinal%20Splash%20page.png?v=1582227207926)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}></animated.div>
  ),
]


class SignInSide extends React.Component {

    continue = e => {
        localStorage.clear();
        e.preventDefault();
        this.props.nextStep();
    }

    aboutButton = e => {
        e.preventDefault();
        this.props.aboutPage();
    }

    state = { index: 0 }
    toggle = e =>
      this.setState(state => ({
        index: state.index === 2 ? 0 : state.index + 1,
        
      }))

    render(){
        const { classes, theme } = this.props;
        const { values, handleChange } = this.props;


        return(
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} component={Paper} className={classes.image}>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <SearchOutlinedIcon />
                </Avatar>
                <br/>

                <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 700, duration: 1000 }}
                >
                { props => (
                <div style={props}>
                  <Typography className={classes.example} component="h1" variant="h5">
                    <strong>Enter</strong> Username to Begin!
                  </Typography>
                  </div> 
                )}
                </Spring>
                <br/>
                <Typography component="h1" variant="h5" gutterBottom>
                    <Username/>
                  </Typography> 
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Username"
                    autoFocus
                    onChange={handleChange('username')}
                    defaultValue={values.username}
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.continue}
                  >
                    Explore
                  </Button>
                  <Grid container>
                    <Grid item xs>
                    <Typography component="p" variant="p">
                          Not Sure Where to Start?
                    </Typography>
                      <Link onClick={this.aboutButton}>
                        Click Me for Help!
                      </Link>
                    </Grid>
                  </Grid>
                </form>
                <br/>
                <br/>
              </div>
            </Grid>
          </Grid>
        )
    }

}

SignInSide.propTypes = {	
    classes: PropTypes.object.isRequired,	
    theme: PropTypes.object.isRequired,	
  };	
export default withStyles(styles, { withTheme: true })(SignInSide);	