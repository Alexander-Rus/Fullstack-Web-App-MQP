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
        Item_data: [],
        ShowLoading: true,
        ShowContent: false,	
      };

      visitedSite = () => {
        this.props.changeVisit_item();
      };

    componentDidMount() {
      
      const { keepContent_item } = this.props
      if(keepContent_item) {
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
        const title11 = urls.TITLE11;
        const title12 = urls.TITLE12;
        const title13 = urls.TITLE13;
        const title14 = urls.TITLE14;
        const title15 = urls.TITLE15;
        const title16 = urls.TITLE16;
        const title17 = urls.TITLE17;
        const title18 = urls.TITLE18;
        const title19 = urls.TITLE19;
        const title20 = urls.TITLE20;

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
        const site11 = urls.SITE11;
        const site12 = urls.SITE12;
        const site13 = urls.SITE13;
        const site14 = urls.SITE14;
        const site15 = urls.SITE15;
        const site16 = urls.SITE16;
        const site17 = urls.SITE17;
        const site18 = urls.SITE18;
        const site19 = urls.SITE19;
        const site20 = urls.SITE20;



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
        const val11 = urls.URL11;
        const val12 = urls.URL12;
        const val13 = urls.URL13;
        const val14 = urls.URL14;
        const val15 = urls.URL15;
        const val16 = urls.URL16;
        const val17 = urls.URL17;
        const val18 = urls.URL18;
        const val19 = urls.URL19;
        const val20 = urls.URL20;


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
        const val11_ = urls.VAL11;
        const val12_ = urls.VAL12;
        const val13_ = urls.VAL13;
        const val14_ = urls.VAL14;
        const val15_ = urls.VAL15;
        const val16_ = urls.VAL16;
        const val17_ = urls.VAL17;
        const val18_ = urls.VAL18;
        const val19_ = urls.VAL19;
        const val20_ = urls.VAL20;



        return (
          <div className={classes.root}>

          <div align='center'>
          {
          this.state.ShowLoading?
          <div>

          <Typography color='primary' align='center' variant='h5'>
          <h2>User Based Results</h2>
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
            from={{ opacity: 0 }}
            to={{opacity: 1 }}
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
                type = 'user'
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


            <Spring
            from={{ opacity: 0 }}
            to={{opacity: 1 }}
            config={{ delay: 6000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site11} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val11} target="_blank" >{title11}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val11_}}
                  config={{ delay: 3000, duration: 2000 }}
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
                val = {val11_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val11} target="_blank" >{val11}</Link>
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
            config={{ delay: 6000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site12} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val12} target="_blank" >{title12}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val12_}}
                  config={{ delay: 3200, duration: 2000 }}
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
                val = {val12_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val12} target="_blank" >{val12}</Link>
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
            config={{ delay: 6500, duration: 500 }}
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
                  <Avatar alt="Logo" src={site13} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val13} target="_blank" >{title13}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val13_}}
                  config={{ delay: 3400, duration: 2000 }}
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
                val = {val13_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val13} target="_blank" >{val13}</Link>
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
            config={{ delay: 7000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site14} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val14} target="_blank" >{title14}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val14_}}
                  config={{ delay: 3600, duration: 2000 }}
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
                val = {val14_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val14} target="_blank" >{val14}</Link>
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
            config={{ delay: 7500, duration: 500 }}
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
                  <Avatar alt="Logo" src={site15} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val15} target="_blank" >{title15}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val15_}}
                  config={{ delay: 3800, duration: 2000 }}
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
                val = {val15_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val15} target="_blank" >{val15}</Link>
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
            config={{ delay: 8000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site16} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val16} target="_blank" >{title16}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val16_}}
                  config={{ delay: 4000, duration: 2000 }}
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
                val = {val16_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val16} target="_blank" >{val16}</Link>
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
            config={{ delay: 8500, duration: 500 }}
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
                  <Avatar alt="Logo" src={site17} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val17} target="_blank" >{title17}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val17_}}
                  config={{ delay: 4200, duration: 2000 }}
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
                val = {val17_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val17} target="_blank" >{val17}</Link>
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
            config={{ delay: 9000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site18} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val18} target="_blank" >{title18}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val18_}}
                  config={{ delay: 4400, duration: 2000 }}
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
                val = {val18_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val18} target="_blank" >{val18}</Link>
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
            config={{ delay: 9500, duration: 500 }}
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
                  <Avatar alt="Logo" src={site19} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val19} target="_blank" >{title19}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val19_}}
                  config={{ delay: 4600, duration: 2000 }}
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
                val = {val19_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val19} target="_blank" >{val19}</Link>
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
            config={{ delay: 10000, duration: 500 }}
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
                  <Avatar alt="Logo" src={site20} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val20} target="_blank" >{title20}</Link>
                </div>
                <div className={classes.column}>
                <Spring
                  from={{ number: 0}}
                  to={{ number: val20_}}
                  config={{ delay: 4800, duration: 2000 }}
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
                val = {val20_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val20} target="_blank" >{val20}</Link>
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
          <h2>User Based Results</h2>
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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
                type = 'user'
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



            <ExpansionPanel >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div >
                  <Avatar alt="Logo" src={site11} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val11} target="_blank" >{title11}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val11_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val11_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val11} target="_blank" >{val11}</Link>
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
                  <Avatar alt="Logo" src={site12} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val12} target="_blank" >{title12}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val12_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val12_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val12} target="_blank" >{val12}</Link>
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
                  <Avatar alt="Logo" src={site13} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val13} target="_blank" >{title13}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val13_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val13_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val13} target="_blank" >{val13}</Link>
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
                  <Avatar alt="Logo" src={site14} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val14} target="_blank" >{title14}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val14_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val14_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val14} target="_blank" >{val14}</Link>
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
                  <Avatar alt="Logo" src={site15} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val15} target="_blank" >{title15}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val15_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val15_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val15} target="_blank" >{val15}</Link>
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
                  <Avatar alt="Logo" src={site16} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val16} target="_blank" >{title16}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val16_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val16_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val16} target="_blank" >{val16}</Link>
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
                  <Avatar alt="Logo" src={site17} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val17} target="_blank" >{title17}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val17_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val17_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val17} target="_blank" >{val17}</Link>
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
                  <Avatar alt="Logo" src={site18} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val18} target="_blank" >{title18}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val18_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val18_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val18} target="_blank" >{val18}</Link>
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
                  <Avatar alt="Logo" src={site19} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val19} target="_blank" >{title19}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val19_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val19_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val19} target="_blank" >{val19}</Link>
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
                  <Avatar alt="Logo" src={site20} className={classes.large} variant='rounded' align='center' />
                </div>
                <div className={classes.column}>
                  <Link color="primary" href={val20} target="_blank" >{title20}</Link>
                </div>
                <div className={classes.column}>

                  <Typography className={classes.secondaryHeading}>{val20_.toFixed(5)}</Typography>
                </div>

                <div className={classes.column}>
                <Star 
                val = {val20_}
                type = 'user'
                />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <Link color="primary" href={val20} target="_blank" >{val20}</Link>
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