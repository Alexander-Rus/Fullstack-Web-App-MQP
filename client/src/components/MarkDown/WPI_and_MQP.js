import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import WPI_1 from '../../Images/WPI_1.jpg';
import WPI_2 from '../../Images/WPI_2.jpg';
import WPI_3 from '../../Images/WPI_3.jpg';
import WPI_4 from '../../Images/WPI_5.png';




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
        padding: '5px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%',


      }
})

const CustomResponsiveFontSizes = (props) => {
  const { classes } = props;
  return (
      <div>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>WPI: Worcester Polytechnic Institute</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Worcester Polytechnic Institute is a private research university focused on 
          technical skills and STEM education. Since its founding in 1865, the university 
          has been helping undergraduate and graduate students alike achieve their bachelors,
           masters, and PhD degrees in a variety of different disciplines. 
          </Typography>
          <img src={WPI_1} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          Located in the heart of Worcester, Massachusetts, WPI has become a diverse campus of
           motivated men and women. Life on campus is composed of studying, athletics, school
            traditions, and volunteering.  
          </Typography>
          <img src={WPI_2} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          WPI has a unique curriculum that pushes the idea of project based learning. 
          Students are motivated to look for project opportunities both on and off campus. 
          The Interactive Qualifying Project(IQP) is a special team based project one completes 
          in their junior year that is intended to apply engineering skills to social and human needs. 
          This project does not necessarily require skills specific to one’s major, and is therefore 
          considered to be “interdisciplinary”.  The majority of students chose to complete this project 
          internationally, thanks to the Global Projects Program. As a result, WPI sends more engineering 
          students abroad than any other university. Upon completing the IQP, students then go on to complete 
          their MQP.   
          </Typography>
          <img src={WPI_3} className={classes.IMG1} />
          <br/>
      </Paper>
      <br/>

      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>MQP: Major Qualifying Project</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          The Major Qualifying Project is a large scale project that assess students’
           knowledge in their specific field of study. Completed in the senior year of 
           undergraduate study, the MQP often involves a combination of research and design. 
           Students, either independently or in teams, work under a professor who advises them 
           in the project process. 
          </Typography>
          <img src={WPI_4} className={classes.IMG2} />
          <Typography align='left' className={classes.body}>
          This very web application is a part of the MQP that has been completed by 
          Alexander Rus and Alex Tian working under Dr. Kyumin Lee and PhD student 
          Nguyen (Ben) Vo. 
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)