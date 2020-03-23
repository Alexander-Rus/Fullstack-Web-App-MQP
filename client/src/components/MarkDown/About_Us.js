import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';	
import About_1 from '../../Images/About_1.jpg';
import About_2 from '../../Images/About_2.jpg';
import About_3 from '../../Images/About_3.jpg';
import About_4 from '../../Images/About_4.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';




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
        width: '30%',
      },
})

const CustomResponsiveFontSizes = (props) => {
  const { classes } = props;


  return (
      <div>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Who Are We?</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Alexander Rus and Alex Tian are two senior undergraduate students at Worcester Polytechnic Institute.
           Together they worked on this MQP from August 22, 2019 to March 6, 2020. Advising them
            throughout the project was Dr. Kyumin Lee, and Nguen(Ben) Vo. 
          </Typography>
          <br/>
      </Paper>
      <br/>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6} align='center'>
        <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Alexander Rus</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Alex Rus is a Computer Science Major with minors in both Business and Data Science.
           Alex enjoys problem solving, coding, and running for the WPI Track and Field Team.   
          </Typography>
          <img src={About_1} className={classes.IMG1} />
          <br/>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/alex-rus/")} >	
               <LinkedInIcon color='secondary' fontSize='large' />	
            </IconButton>
            <IconButton onClick={() => window.open("https://github.com/Alexander-Rus")}>	
               <GitHubIcon color='primary' fontSize='large' />	
            </IconButton>
          <br/>
          <br/>
      </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} align='center'>
        <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Alex Tian</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Alex Tian is a Computer Science Major with an IMGD minor. He likes software development, badminton, running, and creating music. 
          </Typography>
          <br/>
          <img src={About_2} className={classes.IMG1} />
          <br/>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/alex-tian-16637a14a/")}>	
               <LinkedInIcon color='secondary' fontSize='large' />	
            </IconButton>
            <IconButton onClick={() => window.open("https://github.com/Dou-ble")}>	
               <GitHubIcon color='primary' fontSize='large' />	
            </IconButton>
          <br/>
          <br/>
      </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} align='center'>
        <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Kyumin Lee</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Dr. Kyumin Lee is an Assistant Professor at Worcester Polytechnic Institute. Professor Lee's primary research interests are social
           computing, information retrieval, data science, and cyber security. 
          </Typography>
          <img src={About_3} className={classes.IMG1} />
          <br/>
          <Link href="https://web.cs.wpi.edu/~kmlee/">
            https://web.cs.wpi.edu/~kmlee/
          </Link>
          <br/>
          <br/>
      </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} align='center'>
        <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Nguyen (Ben) Vo</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Nguyen(Ben) Vo is a PhD student in WPI's Data Science program. Ben's research
           interests are Social Media Mining, Machine Learning, and Deep Learning.    
          </Typography>
          <img src={About_4} className={classes.IMG1} />
          <br/>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/nguyenvo09/")}>	
               <LinkedInIcon color='secondary' fontSize='large' />	
            </IconButton>
          <br/>
          <br/>
      </Paper>
        </Grid>


      </Grid>

      
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)