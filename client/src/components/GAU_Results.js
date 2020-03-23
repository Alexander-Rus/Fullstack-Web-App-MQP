import React, { Component } from 'react';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';	
import { withStyles } from '@material-ui/core/styles';	
import { Spring } from "react-spring/renderprops";
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Star from './star';




const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(30),
    color: theme.palette.text.primary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  large: {
    width: 50,
    height: 50,
  },
  specialmargin: {
    margin: '1rem auto',
  }
});

class DetailedExpansionPanel extends Component {
    state = {
        urls: ['bob'],
        gau_data: [],
        ShowLoading: true,
        ShowContent: false,	
      };

      visitedSite = () => {
        this.props.changeVisit_gau();
      };

    componentDidMount() {
      
      const { keepContent_gau } = this.props
      if(keepContent_gau) {
        this.setState({ShowLoading : false})
        this.setState({ShowContent: true})
      }
      this.visitedSite()
      
    }

    render() {
        const { classes } = this.props;
        const { urls } = this.props

        console.log("This is the urls in expansion:", urls)

        const title1 = urls.TITLE1;
        const title2 = urls.TITLE2;
        const title3 = urls.TITLE3;
        const title4 = urls.TITLE4;
        const title5 = urls.TITLE5;
        const title6 = urls.TITLE6;
        const title7 = urls.TITLE7;
        const title8 = urls.TITLE8;
        const title9 = urls.TITLE9;
        const title10 = urls.TITLE10;

        const site1 = urls.SITE1;
        const site2 = urls.SITE2;
        const site3 = urls.SITE3;
        const site4 = urls.SITE4;
        const site5 = urls.SITE5;
        const site6 = urls.SITE6;
        const site7 = urls.SITE7;
        const site8 = urls.SITE8;
        const site9 = urls.SITE9;
        const site10 = urls.SITE10;



        const val1 = urls.URL1;
        const val2 = urls.URL2;
        const val3 = urls.URL3;
        const val4 = urls.URL4;
        const val5 = urls.URL5;
        const val6 = urls.URL6;
        const val7 = urls.URL7;
        const val8 = urls.URL8;
        const val9 = urls.URL9;
        const val10 = urls.URL10;


        const val1_ = urls.VAL1;
        const val2_ = urls.VAL2;
        const val3_ = urls.VAL3;
        const val4_ = urls.VAL4;
        const val5_ = urls.VAL5;
        const val6_ = urls.VAL6;
        const val7_ = urls.VAL7;
        const val8_ = urls.VAL8;
        const val9_ = urls.VAL9;
        const val10_ = urls.VAL10;



        return (
            <div className={classes.root}>

              <div align='center'>
              {
              this.state.ShowLoading?
              <div>
                

              <Typography color='primary' align='center' variant='h5'>
              <h2>GAU Based Results</h2>
              </Typography>

              <Spring
              from={{ opacity: 0}}
              to={{opacity: 1}}
              config={{ delay: 500, duration: 500 }}
              > 
              { props => (
                  <div style={props}>
                  <ExpansionPanel className={classes.root}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site1} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val1} target="_blank" >{title1}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val1_}}
                      config={{ delay: 1000, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}><strong>{props.number.toFixed(5)}</strong></Typography>
                      </div>
                    )}
                    </Spring>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val1_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val1} target="_blank" >{val1}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

                  </div>
              )}
              </Spring>
                

                
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 1000, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site2} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val2} target="_blank" >{title2}</Link>
                    </div>
                    <div className={classes.column}>
                      <Spring
                        from={{ number: 0}}
                        to={{ number: val2_}}
                        config={{ delay: 1200, duration: 2000 }}
                        >
                        {props => (
                          <div style={props}>

                        <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                        </div>
                      )}
                      </Spring>
                      
                    </div>
                    <div className={classes.column}>
                    <Star 
                    val = {val2_}
                    type = 'gau'
                    />
                    </div>

                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val2} target="_blank" >{val2}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

                
              
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 1500, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site3} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val3} target="_blank" >{title3}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val3_}}
                      config={{ delay: 1400, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val3_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val3} target="_blank" >{val3}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

                
              
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 2000, duration: 500 }}
                > 
                { props => (
                    <div style={props}>

                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site4} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val4} target="_blank" >{title4}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val4_}}
                      config={{ delay: 1600, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val4_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val4} target="_blank" >{val4}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

                
              
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 2500, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site5} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val5} target="_blank" >{title5}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val5_}}
                      config={{ delay: 1800, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val5_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val5} target="_blank" >{val5}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

                
              
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 3000, duration: 500 }}
                > 
                { props => (
                    <div style={props}>

                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site6} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val6} target="_blank" >{title6}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val6_}}
                      config={{ delay: 2000, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val6_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val6} target="_blank" >{val6}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

                
                
              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 3500, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site7} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val7} target="_blank" >{title7}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val7_}}
                      config={{ delay: 2200, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val7_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val7} target="_blank" >{val7}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>


              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 4000, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site8} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val8} target="_blank" >{title8}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val8_}}
                      config={{ delay: 2400, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val8_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val8} target="_blank" >{val8}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>


              <Spring
                from={{ opacity: 0 }}
                to={{opacity: 1 }}
                config={{ delay: 4500, duration: 500 }}
                > 
                { props => (
                    <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site9} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val9} target="_blank" >{title9}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val9_}}
                      config={{ delay: 2600, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val9_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val9} target="_blank" >{val9}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>

 
              <Spring
              from={{ opacity: 0}}
              to={{opacity: 1}}
              config={{ delay: 5000, duration: 500 }}
              > 
              { props => (
                  <div style={props}>
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site10} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val10} target="_blank" >{title10}</Link>
                    </div>
                    <div className={classes.column}>
                    <Spring
                      from={{ number: 0}}
                      to={{ number: val10_}}
                      config={{ delay: 2800, duration: 2000 }}
                      >
                      {props => (
                        <div style={props}>

                      <Typography className={classes.secondaryHeading}>{props.number.toFixed(5)}</Typography>
                      </div>
                    )}
                    </Spring>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val10_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val10} target="_blank" >{val10}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                </div>
                )}
              </Spring>



              </div>
              :null
              }
              </div>

              <div>
              {
              this.state.ShowContent?
              <div>

              <Typography color='primary' align='center' variant='h5'>
              <h2>GAU Based Results</h2>
              </Typography>
                  <ExpansionPanel className={classes.root}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site1} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val1} target="_blank" >{title1}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}><strong>{val1_.toFixed(5)}</strong></Typography>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val1_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val1} target="_blank" >{val1}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                

                
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site2} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val2} target="_blank" >{title2}</Link>
                    </div>
                    <div className={classes.column}>

                        <Typography className={classes.secondaryHeading}>{val2_.toFixed(5)}</Typography>
                      
                    </div>
                    <div className={classes.column}>
                    <Star 
                    val = {val2_}
                    type = 'gau'
                    />
                    </div>

                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val2} target="_blank" >{val2}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

                
              
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site3} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val3} target="_blank" >{title3}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val3_.toFixed(5)}</Typography>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val3_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val3} target="_blank" >{val3}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                
                
              

                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site4} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val4} target="_blank" >{title4}</Link>
                    </div>
                    <div className={classes.column}>


                      <Typography className={classes.secondaryHeading}>{val4_.toFixed(5)}</Typography>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val4_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val4} target="_blank" >{val4}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

                
              
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site5} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val5} target="_blank" >{title5}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val5_.toFixed(5)}</Typography>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val5_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val5} target="_blank" >{val5}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
                
              

                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site6} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val6} target="_blank" >{title6}</Link>
                    </div>
                    <div className={classes.column}>


                      <Typography className={classes.secondaryHeading}>{val6_.toFixed(5)}</Typography>

                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val6_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val6} target="_blank" >{val6}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

                
                
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site7} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val7} target="_blank" >{title7}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val7_.toFixed(5)}</Typography>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val7_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val7} target="_blank" >{val7}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>


                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site8} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val8} target="_blank" >{title8}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val8_.toFixed(5)}</Typography>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val8_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val8} target="_blank" >{val8}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>


                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site9} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val9} target="_blank" >{title9}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val9_.toFixed(5)}</Typography>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val9_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val9} target="_blank" >{val9}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

 
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div >
                      <Avatar alt="Logo" src={site10} className={classes.large} variant='rounded' align='center' />
                    </div>
                    <div className={classes.column}>
                      <Link color="primary" href={val10} target="_blank" >{title10}</Link>
                    </div>
                    <div className={classes.column}>

                      <Typography className={classes.secondaryHeading}>{val10_.toFixed(5)}</Typography>
                    </div>

                    <div className={classes.column}>
                    <Star 
                    val = {val10_}
                    type = 'gau'
                    />
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                      <Typography variant="caption">
                        <Link color="primary" href={val10} target="_blank" >{val10}</Link>
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Button size="small" color="primary">
                      Visit
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>

              </div>
              :null
              }
              </div>

            </div>
          );
        }


    }

DetailedExpansionPanel.propTypes = {	
    classes: PropTypes.object.isRequired,	
    theme: PropTypes.object.isRequired,	
  };

export default withStyles(styles, { withTheme: true })(DetailedExpansionPanel);