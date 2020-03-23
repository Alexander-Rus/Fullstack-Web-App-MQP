import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IMG1 from '../../Images/Nav_1.PNG';
import IMG2 from '../../Images/Nav_2.PNG';
import IMG3 from '../../Images/Nav_3.PNG';
import IMG4 from '../../Images/Nav_4.PNG';
import IMG5 from '../../Images/Nav_5.PNG';
import IMG6 from '../../Images/Nav_6.PNG';
import IMG7 from '../../Images/Nav_7.PNG';
import IMG8 from '../../Images/Nav_8.PNG';



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
            <h2>Welcome!</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Welcome to the 'Mitigating the Impact of Fake News MQP Web Application!' 
          This is the interactive portion of the Major Qualifying Project completed
           by WPI students Alexander Rus and Alex Tian and advised by Dr. Kyumin
            Lee and Ben Vo PhD. Using this application, you can get the recommended
             URLs for a particular twitter user based on their previously visited URLs.
              Let's get started!
          </Typography>
          <Typography align='left' className={classes.body}>
            Upon visiting the web address, you will be greeted by the home search screen.
          </Typography>
          <img src={IMG1} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          On one side you have the clickable title card display, and on the other side you
           have the search bar. In the search bar you can enter a Twitter user-name either
            as a screen name(i.e 'Bob1234') or as a Twitter handle(i.e '@Bob1234'). Because
             we can only get the recommended URLS for users in our data set, we are ideally
              going to want to try and enter one of them. We can try entering a random Twitter user
               and hope for the best, or we can look at the scrolling text for some examples
                of users we have in the database. 
          </Typography>
          <img src={IMG2} className={classes.IMG1} />
          <br/>
      </Paper>
      <br/>

      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Explore the Interface</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          With the user-name in the search bar, hit  the 'EXPLORE' button, to be brought
           to the results page. The results page has a lot of different views, but it will always
            open with the 'Twitter Information' view first. At the top if we see the two
             green messages "Located User in Twitter" and "User Found in Dataset", that means
              we were able to find the Twitter user's information and get their recommended URLs.
               If one of those messages is red, then we cannot get the recommended URLs for that user. 
          </Typography>
          <img src={IMG3} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          Now we can view various different characteristics about our Twitter user,
           granted they provided the information in their Twitter profile. We can see
            some of their profile information in the left side panel and some of their
             activity stats in the right side. If we scroll down, we can see a graphical
              representation of their activity on the right. Additionally, we can see
               their URL recommendation activity at February 20, 2020. We can see that
                in the last 200 tweets this user sent, 57 of them contained URLs, however
                 none of them were fact checking URLs.
          </Typography>
          <img src={IMG4} className={classes.IMG1} />
          <br/>
      </Paper>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>Recommended URLs</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          If we examine the panel on the left-hand side of the application, at
           the top we have a button labeled "SEARCH" which you can click if you
            would like to enter a different Twitter user into the search bar.
             Beneath that, we have the "Results" section. In this section we actually
              see what the recommended URLs for this user are based on our different metrics. 
          </Typography>
          <img src={IMG5} className={classes.IMG2} />
          <Typography align='left' className={classes.body}>
            Right now, we are in the "Twitter" view, but if we
             click on the second option, labeled "GAU Results",
              we are brought to a new view that displays the recommended
               URLs using the GAU recommendation system. 
          </Typography>
          <img src={IMG6} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          In this view, we can see a list of cards displaying the recommended
           URLs ordered by how highly they score using this specific recommendation
            system's metrics. Each card has the logo of the fact checking website,
             the title of the article, the calculated score, and a bar graph
              to show said score visually. If one wants to visit the website, they can clickt the
               title, and if you want to see the full web address they can click to the card to expand it. 
          </Typography>
          <img src={IMG7} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          There are four different recommendation models that we explored:
           "GAU", "Matrix Factorization", "Item Based Recommendation", and
            "User Based Recommendation". Each model is listed on the side panel,
             and can be clicked on to see the recommended URLs based on that system. 
          </Typography>

          <br/>
      </Paper>
      <Paper elevation={3}>
          <Typography align='left' variant='h5' className={classes.header}>
            <h2>About Section</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Under the "Results" section of the navigation panel,
           there is an "About" section. This section is intended
            to provide the user with some useful information about
             the project, the logic behind the recommendation systems,
              and the MQP. 
          </Typography>
          <img src={IMG5} className={classes.IMG2} />
          <Typography align='left' className={classes.body}>
          By clicking on the "Navigation" option, the we are brought to the
           navigation section which is intended to help the user explore the web
            application(that's were we are now). If the user clicks on the
             "How it Works" option, they are brought to the explanation page
              where we explain how each one of the recommendation models works.
               Clicking on the "About Us" allows the user to learn about the project
                creators Alex Rus, Alex Tian. Dr. Lee, and Ben Vo. And lastly, there
                 is the "MQP and WPI" section where we can learn about the Major Qualifying
                  Project and Worcester Polytechnic Institute. 
          </Typography>
          <img src={IMG6} className={classes.IMG1} />
          <Typography align='left' className={classes.body}>
          That is all of the content in the Web Application, good luck and have fun learning!  
          </Typography>

          <br/>
      </Paper>


      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)