import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';







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
        width: '50%',


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
            <h2>Item Based Collaborative Filtering</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          Instead of finding similar users to a user X, Item-Based collaborative filtering finds recommended
           items for user X by using cosine similarity to find k similar items to an item user X has not used
            and then estimates user X’s rating for that item as a weighted average of the cosine similarity of
             the k similar items. Since Item-Based collaborative filtering is very similar to User-Based collaborative
              filtering (explained in section 3.1.1), we will only go into detail about the differences between the
               two in this section.
          </Typography>
          <Typography align='left' className={classes.body} >
          The utility matrix for Item-Based collaborative filtering represented users as columns and URLs as rows. 
          After creating the training, validation, and test matrices, we used cosine similarity to determine the k
           most similar URLs to each URL for user X. A URL becomes more similar to another URL the more times they
            have both been tweeted by the same user. Then, we estimated user X’s rating for each URL as a weighted average
             of the cosine similarity of the k similar URLs. For each URL, we summed up the cosine similarities of the k
              similar URLs that have also been tweeted by user X. We then divided that sum by the sum of the cosine similarities
               of all of the k similar URLs to calculate a weighted average between 0 and 1. The higher the weighted average,
                the more likely user X will like the URL and use it in a future tweet. Finally we evaluated Item-Based collaborative
                 filtering by calculating precision, recall, and nDCG at k = 10, 20, 50, and 100. This evaluation helped achieve our
                  objective of comparing the four recommendation systems.
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)