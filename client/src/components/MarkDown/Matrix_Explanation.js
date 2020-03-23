import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Matrix_1 from '../../Images/Matrix_1.PNG';
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
            <h2>Matrix Factorization</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          A more advanced collaborative filtering method, and the technique that the GAU model is built on,
           is matrix factorization. To get another point of comparison and better understand the GAU model,
            we developed a matrix factorization recommendation system.
          </Typography>
          <Typography align='left' className={classes.body} >
          We used Spotlight’s implicit factorization model to implement our recommendation system.
           Spotlight uses <a href="https://pytorch.org/" target="_blank">PyTorch</a>, an open source machine learning framework, 
           to build its recommender models.
          </Typography>
          <img src={Matrix_1} className={classes.IMG1} />
          <Typography align='left' className={classes.body} >
          The implicit factorization model has many parameters that affect how the model runs. We decided on the values
           of these parameters by testing the model multiple times with a wide variety of values, calculating the results with
            precision, recall, and ndcg value, and then comparing the tests to find the optimal set of parameters. The parameters
             we focused our tests on were loss function, number of embedding dimensions, number of iterations, batch_size, L2 loss
              penalty, learning rate, and number of negative samples. After discovering the optimal parameters and calculating the
               precision, recall, and ndcg at k = 10, 20, 50, and 100, we made progress on our objective of comparing our four
                recommendation systems.
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)