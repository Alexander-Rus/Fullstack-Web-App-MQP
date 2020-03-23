import React, { Component } from 'react'
import Chart from './Line_Chart'
import Typography from '@material-ui/core/Typography';	
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';	
import PropTypes from 'prop-types';	
import Grid from '@material-ui/core/Grid';	
import Avatar from '@material-ui/core/Avatar';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import TodayIcon from '@material-ui/icons/Today';
import DescriptionIcon from '@material-ui/icons/Description';
import Example_pieChart from './Example_pieChart'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const styles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    large: {
        width: 150,
        height: 150,

      },
    fixedHeight: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      },


      fixedHeight2: {
        height: 420,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      },
      depositContext: {
        flex: 1,
      },
  });


export class Twitter extends Component {
    state = {
        twitter: ['bob'],
        recent_activity: [],	
      };

      componentDidMount() {
        const { values } = this.props
        fetch(`/Twitter_Info/${values.username}`)
        .then(res => res.json())
        .then(twitter => this.setState({twitter : twitter}, () => console.log('Twitter Data...', twitter)));

    }



    render() {
        const { classes, twitterInfo, recent_activity } = this.props;
        var error = false

        console.log(twitterInfo[0])
        try{
          if(twitterInfo[0].hasOwnProperty('code')) {
            console.log("Error", twitterInfo[0].message)
            error = true;
            console.log(error)

          }

        }
        catch(err) {
          console.log("Keep waiting")
      }


          


        const name = twitterInfo.name
        const screen_name = twitterInfo.screen_name
        const location = twitterInfo.location
        const description = twitterInfo.description
        const followers_count = twitterInfo.followers_count
        const friends_count = twitterInfo.friends_count
        const created_at = twitterInfo.created_at
        const favourites_count = twitterInfo.favourites_count
        const verified = twitterInfo.verified
        const statuses_count = twitterInfo.statuses_count

        var contain_URLS = null
        var contain_fact = null
        try {
          var contain_URLS = recent_activity.TWEETS_URLS
          var contain_fact = recent_activity.FACT_CHECKING
        }
        catch(TypeError) {
          var contain_URLS = null
          var contain_fact = null
        }


        const data = [
          {
            name: 'Tweets Containing URLS', uv: contain_URLS,
          },
          {
            name: 'Tweets containing Fact Checking URLS', uv: contain_fact,
          },
        ]; 

        var orgininal_image = twitterInfo.profile_image_url
        try {
            var image = orgininal_image.replace(/_normal\./, '.');
            if(verified) {
                var returnVal = 'True'
            }
            else {
                var returnVal = 'False'
            }
        }
        catch(err) {
            var image = orgininal_image;
            var returnVal = 'Loading'
        }


        return (
            <div>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6} lg={7} align='center'>
                    <Paper className={classes.fixedHeight}>
                    <br/>
                    <Avatar alt="Profile Image" src={image} className={classes.large} variant='rounded' />
                    <br/>
                    
                    <Typography variant="h5" color="primary" gutterBottom>
                        <strong>{name}</strong>
                    </Typography>
                    <Typography variant="p" color="inherit" gutterBottom>
                        @{screen_name}
                    </Typography>
                    <Typography variant="p" color="inherit" gutterBottom>
                        <RoomOutlinedIcon/>From <strong>{location}</strong>
                    </Typography>

                    <Typography variant="p" color="inherit" gutterBottom>
                        <TodayIcon/>Member Since <strong>{created_at}</strong>
                    </Typography>

                    <Typography variant="p" color="inherit" gutterBottom>
                        <DescriptionIcon/><i>{description}</i> 
                    </Typography>

                    
                    <Typography variant="p" color="inherit" gutterBottom>
                        <CheckCircleIcon/>Verified: <strong>{returnVal} </strong>
                    </Typography>

                    
                    
                    </Paper>     
                    </Grid>

                    <Grid item xs={12} md={6} lg={5}>
                        <Paper className={classes.fixedHeight2}>
                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Number of Followers
                            </Typography>
                            <Typography component="p" variant="h4">
                                <strong>{followers_count}</strong>
                            </Typography>
                        </React.Fragment>
                        <br/>

                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Number of Followings
                            </Typography>
                            <Typography component="p" variant="h4">
                                <strong>{friends_count}</strong>
                            </Typography>
                        </React.Fragment>
                        <br/>

                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Number of Likes Given
                            </Typography>
                            <Typography component="p" variant="h4">
                                <strong>{favourites_count}</strong>
                            </Typography>
                        </React.Fragment>
                        <br/>

                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Number of Tweets
                            </Typography>
                            <Typography component="p" variant="h4">
                                <strong>{statuses_count}</strong>
                            </Typography>
                            <Typography color="textSecondary" className={classes.depositContext}>
                                Including Re-tweets
                            </Typography>
                        </React.Fragment>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                    <Paper className={classes.fixedHeight2}>
                    <Typography component="h2" variant="h5" color="primary" gutterBottom>
                                <strong>Fact Checking in Last 200 tweets, </strong>
                                as of February 20, 2020
                    </Typography>
                    <Chart
                      activity_data={data}
                    />

                    </Paper>

                    </Grid>
                    <Grid item xs={12} md={6} lg={4} align='center'>
                        <Paper>
                        <br/>
                            <Typography component="h2" variant="h5" color="primary" gutterBottom>
                                <strong>Activity Break Down</strong>
                            </Typography>
                            <Example_pieChart 
                            followers_count = {followers_count}
                            friends_count = {friends_count}
                            favourites_count = {favourites_count}
                            statuses_count = {statuses_count}
                            />
                        </Paper>

                    </Grid>
                </Grid>
            </div>
        )
    }
}


Twitter.propTypes = {	
    classes: PropTypes.object.isRequired,	
    theme: PropTypes.object.isRequired,	
  };	
  export default withStyles(styles, { withTheme: true })(Twitter);	