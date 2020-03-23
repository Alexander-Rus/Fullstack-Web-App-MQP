import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GAU_1 from '../../Images/GAU_1.PNG';



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
            <h2>GAU Model Recommendation System</h2>
          </Typography>
          <Typography align='left' className={classes.body} >
          The <a href="https://arxiv.org/pdf/1806.07516.pdf" target="_blank">GAU</a> (Guardian-Guardian SPPMI matrix, Auxiliary information and URL-URL SPPMI matrix) modeling
           system is a recommendation system developed by Nguyen(Ben) Vo PhD, and Dr. Kyumin Lee.
          </Typography>
          <img src={GAU_1} className={classes.IMG2} />

          <Typography align='left' className={classes.body}>
          Built off of matrix factorization, it improves the recommendation model by adding additional matrices
           and auxiliary information. Currently it outperforms the User Based collaborative filtering, Item Based
            collaborative filtering, and matrix factorization. 
          </Typography>
          <Typography align='left' className={classes.body}>
          Though the GAU model provides the most accurate recommendations, we experimented with a number of
           hyper-parameters to try and optimize the model further.
          </Typography>
          <Typography align='left' className={classes.body}>
          The initial parameters were point-wise loss function and 0.8 for the value of alpha_gau, bet_gau,
           and gamm_gau. The parameter with the largest impact ended up being the loss-function. Eventually,
            settling on adaptive hinge. Testing the results and calculating the nDCG with a k value of 10, we
             set the parameters to consistently achieve the best results.   
          </Typography>
          <br/>
      </Paper>
      </div>

  );
}

export default withStyles( styles )( CustomResponsiveFontSizes)