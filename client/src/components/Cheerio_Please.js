import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';	
import { withStyles } from '@material-ui/core/styles';	
import { Spring } from "react-spring/renderprops";


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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
});

class Cherrio_Please extends Component {
    state = {
        urls: ['bob'],
        title:['Insert Title']	
      };

    componentDidMount() {
        //const { values, handleChange } = this.props
        //var original_url = "https://www.snopes.com/fact-check/hillary-clinton-stupid-quote/"
        //var special_char = /\//gi;
        //var url_new = original_url.replace(special_char, "123456" )
        //console.log(url_new)
        //fetch(`/Cheerio_Info/${url}`);
        //fetch(`/Proxy_Issue/${url_new}`)
        //.then(res => res.json())
        //.then(title => this.setState({title : title}, () => console.log('Title fetched...', title)));
    
    }

    render() {
        const title1 = this.state.title.title;
        const site1 = this.state.title.site

        return (
            <div>
            <h2>Help</h2>
            {title1}
            <br/>
            {site1}

            </div>

        );
        }




    }

    Cherrio_Please.propTypes = {	
    classes: PropTypes.object.isRequired,	
    theme: PropTypes.object.isRequired,	
  };

export default withStyles(styles, { withTheme: true })(Cherrio_Please);