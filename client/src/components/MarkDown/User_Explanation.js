import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IMG1 from '../../Images/Nav_1.PNG';
import Proto_1 from '../../Images/Proto_1.png'
import Proto_2 from '../../Images/Proto_2.png'
import Proto_3 from '../../Images/Proto_3.png'
import Proto_4 from '../../Images/Proto_4.png'
import User_1 from '../../Images/User_1.png';
import User_2 from '../../Images/User_2.png';


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
            <h2>User Based Collaborative Filtering</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          One of the first recommendation systems we developed utilized User-Based collaborative filtering.
           User-Based collaborative filtering finds recommended items for a user X by finding k similar users
            to user X using cosine similarity and then estimates user X’s rating for each item as a weighted
             average of the cosine similarity of the k similar users.
          </Typography>
          <Typography align='left' className={classes.body} >
          First, we created a 2D utility matrix of the data, where each row represented a user, each column represented
           a URL, and a 1 signified that the user of that row tweeted the url of that column. Then we split the data containing
            information about user X’s tweet into a training, validation, and test dataset with a 80-10-10 split. The training
             dataset is used to train the model, the validation dataset is used to evaluate the set in order to tune the model’s
              hyperparameters, and the test dataset is used to evaluate the model once tuning of the model is done. The results
               of the test dataset evaluation determine the effectiveness of the model. Because collaborative filtering is a
                simple recommendation system, it does not have any hyperparameters to tune, so we only used the training dataset
                 and test dataset. 
          </Typography>
          <img src={User_1} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          Next, we determined user X’s similar users. To determine similar users, we used a metric called cosine similarity,
           which represents two users as vectors and calculates the cosine of the angle between the two vectors. Essentially,
            a user becomes more similar to another user the more times they have both linked the same URL in their tweets.
             We used scikit-learn, a machine learning Python library, and their cosine_similarity function to do the calculations.
              Each user then has a cosine similarity value from 0 to 1 measuring their similarity to user X, where a greater
               value means a more similar user.
          </Typography>
          <img src={User_2} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          Third, we were able to estimate user X’s rating for each URL as a weighted average of the cosine similarity of the k
           similar users. For each URL, we summed up the cosine similarities of the k similar users that have tweeted about that URL.
            We then divided that sum by the sum of the cosine similarities of all of the k similar users to calculate a weighted average
             between 0 and 1. The higher the weighted average, the more likely the URL will be recommended to user X.
          </Typography>
          <Typography align='left' className={classes.body} >
          Finally, we evaluated User-Based collaborative filtering by calculating precision, recall, and nDCG at k = 10, 20, 50, and 100.
           Precision at k is the proportion of recommended items in the top k recommendations that are relevant (Malaeb, 2017). Recall
            at k is the proportion of relevant items found in the top k recommendations. nDCG at k measures the usefulness of an item
             based on its position in the recommended items list and its relevance (Stanford University, 2013). Note that a relevant URL
              is a URL that has been tweeted by the selected user, and a recommended URL is a URL that has not been tweeted but is
               recommended by the recommendation system. We specifically used nDCG to compare the four different recommendation systems,
                which helped achieve our objective of comparing our recommendation models.
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)