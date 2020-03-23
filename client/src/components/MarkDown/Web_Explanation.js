import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IMG1 from '../../Images/Nav_1.PNG';
import Proto_1 from '../../Images/Proto_1.png'
import Proto_2 from '../../Images/Proto_2.png'
import Proto_3 from '../../Images/Proto_3.png'
import Proto_4 from '../../Images/Proto_4.png'
import IMG2 from '../../Images/Nav_2.PNG';
import IMG3 from '../../Images/Nav_3.PNG';
import IMG4 from '../../Images/Nav_4.PNG';
import IMG5 from '../../Images/Nav_5.PNG';
import IMG6 from '../../Images/Nav_6.PNG';
import IMG7 from '../../Images/Nav_7.PNG';
import IMG8 from '../../Images/Nav_8.PNG';
import Web_5 from '../../Images/Web_5.PNG';
import Web_6 from '../../Images/Web_6.PNG';
import Web_8 from '../../Images/Web_8.PNG';
import Web_9 from '../../Images/Web_9.PNG';






const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
      },
      header: {
        paddingTop: '2vh',
        marginLeft: '3vw',
      },
      body: {
        paddingTop: '2vh',
        marginLeft: '4vw',
        marginRight: '6vw',
        fontSize: '130%',
        fontWeight: '500',
      },
      IMG1: {
        marginTop: '2vh',
        borderRadius: '8px',
        border: '2px solid #ddd',
        padding: '5px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',


      },
      IMG2: {
        marginTop: '2vh',
        borderRadius: '8px',
        border: '2px solid #ddd',
        padding: '5px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '70%',


      }
})

const CustomResponsiveFontSizes = (props) => {
  const { classes } = props;
  return (
      <div>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Web Application</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          In this section, we are going to explore how the Web Application
           was built, our planning process, and the overall live results.
            The Web Application was the final part of our MQP project and is
             intended to exists as a real interactive element that could display
              the results of our project. After exploring each of the recommendation
               systems, we really wanted to show people just how interesting the
                results were, and thus building the Web Application became one of our
                 project goals.
          </Typography>
          <img src={IMG1} className={classes.IMG1} />
          <br/>
      </Paper>
      <br/>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Planning Process</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Before actually building the Web Application, we wanted
           to do some initial sketches and UI mock-ups first. Using
            the online program <a href="https://www.canva.com/" target="_blank">Canva</a>, we built some early mock-ups of what
             we wanted the web application to look like. Starting with the search bar,
              we created a sketch that looks as follows:
          </Typography>
          <img src={Proto_1} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          Our Final result is actually fairly similar to the mock-up but with a few enhancements
           to the original design. When a user inputs a Twitter username, they are then supposed
            to be brought to the "Twitter Information" section. We were not sure what kind of information
             we would have available on this page, so we created a UI mock-up that looks as follows:
          </Typography>
          <img src={Proto_2} className={classes.IMG1} />
          <img src={Proto_3} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          The final product ended up being quite different, and provides far more information that we
           initially thought it would.  Our last mock-up was intended to show what the URL recommendation
            view would actually look like. Our initial idea was as follows:
          </Typography>
          <img src={Proto_4} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          We knew we wanted to include some kind of thumbnail of the fact checking URLs as well as include
           some kind of graphic to display the associated scoring metric. Our actual results ended up being
            a fair bit more complex, but the overall aesthetic is still exists. With the UI mock-ups completed
             we moved on the building the Web Application itself.
          </Typography>
          <br/>
      </Paper>
      <br/>

      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Building the Back-End</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          For this Web Application we used the M.E.R.N stack(MongoDB, Express, React, Node.js).
           Using <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, we built a back-end server using <a href="https://expressjs.com/" target="_blank">Express</a>. This server would handle data
            collection and API interaction. <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is a great NoSQL distributed database that would
             store our user information. <a href="https://reactjs.org/" target="_blank">React</a> is a great JavaScript library that allows the creation
              of UI views using multiple components. 
          </Typography>
          <Typography align='left' className={classes.body}>
          Using the Node package "Concurrently', the back-end Express server runs simultaneous with the front-end React
           Application. The Express server calls on multiple different routes when we need to fetch data. For
            the user data, we call on routes that access MongoDB. These routes accept a particular username, and
             then send the proper JSON response to the font-end. 
          </Typography>
          <img src={Web_5} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          Inputting the vast amounts of user data was not easy, as we had to run our recommendation
           engines on our data set for long periods of time. With almost 5,000 users and over 12,000 URLs,
            we needed to employ more efficient methods of computing to get the results we wanted. Thus,
             we used <a href="https://aws.amazon.com/" target="_blank">AWS(Amazon Web Services)</a> as our cloud computing agent. Using their EC2(Elastic Compute Cloud)
              we created multiple virtual Linux machines. 
          </Typography>
          <img src={Web_6} className={classes.IMG1} />

          <Typography align='left' className={classes.body}>
          Using Putty as our medium of communication, and Filezilla as our method of FTP(File Transfer Protocol),
           we sent our Python scripts to the servers and ran them until all of the data had been created. 
          </Typography>
          <br/>
          <Typography align='left' className={classes.body}>
          With the data in our MongoDB back-end filled using cloud computing, we needed to find a way to retrieve real-time
           Twitter information. For this task we incorporated the <a href="https://developer.twitter.com/en/docs" target="_blank">Twitter API</a>. To use the Twitter API, we had to register
            with Twitter to get the appropriate Auth Keys. Once we had those, we pass the route a Twitter username, and
             the API returns the data that we desire.
          </Typography>
          <img src={Web_8} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          With our back-end complete, we could now focus on the front end. 
          </Typography>
          <br/>

      </Paper>
      <br/>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Developing the Front-End</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          For the front-end of our Web Application, we used React. To give our application
           extra appeal and ease of use, we used the React UI Framework <a href="https://material-ui.com/" target="_blank">Material-UI</a>. Material-UI
            is a great framework developed by Google that allows easy integration of components.
             With an entry point of 'App.js', we build our react application navigation using switch
              statements in "Applayout.js".  
          </Typography>
          <img src={Web_9} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          Each component is built and stored in the components folder. Some components utilize some additional
           libraries. For displaying the graphs, we used 're-charts', for the particle simulation on the search
            page we used 'react-particles-js', and for the animations we used 'react-spring'. If you want to see
             how the React application is structured, check out our GitHub repository. 
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)