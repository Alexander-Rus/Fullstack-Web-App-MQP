import React from 'react';	
import PropTypes from 'prop-types';	
import classNames from 'classnames';	
import { withStyles } from '@material-ui/core/styles';	
import Drawer from '@material-ui/core/Drawer';	
import CssBaseline from '@material-ui/core/CssBaseline';	
import AppBar from '@material-ui/core/AppBar';	
import Toolbar from '@material-ui/core/Toolbar';	
import List from '@material-ui/core/List';	
import Typography from '@material-ui/core/Typography';	
import Divider from '@material-ui/core/Divider';	
import IconButton from '@material-ui/core/IconButton';	
import MenuIcon from '@material-ui/icons/Menu';	
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';	
import ListItem from '@material-ui/core/ListItem';	
import ListItemIcon from '@material-ui/core/ListItemIcon';	
import ListItemText from '@material-ui/core/ListItemText';	
import Button from '@material-ui/core/Button'	
import PersonIcon from '@material-ui/icons/Person';
import TwitterIcon from '@material-ui/icons/Twitter';
import HttpIcon from '@material-ui/icons/Http';	
import NavigationIcon from '@material-ui/icons/Navigation';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import BlurLinearIcon from '@material-ui/icons/BlurLinear';
import Expansion from "./Expansion";
import Expansion_Item from "./Expansion_Item"
import Twitter from './Twitter'
import Matrix_Factorization from './Matrix_Factorization'
import GAU from './GAU_Results'
import SearchIcon from '@material-ui/icons/Search';
import How_It_Works from './MarkDown/How_It_Works'
import WPI_and_MQP from './MarkDown/WPI_and_MQP';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Navigation from './MarkDown/Navigation';
import About_Us from './MarkDown/About_Us';

const drawerWidth = 240;	
function Conteudo(props){	
    return(	
        <Typography component='div'>	
        {props.children}	
        </Typography>	
    )	
}	
Conteudo.propTypes ={	
    children: PropTypes.node.isRequired,	
};	
const styles = theme => ({	
  root: {	
    display: 'flex',	
  },	
  appBar: {	
    transition: theme.transitions.create(['margin', 'width'], {	
      easing: theme.transitions.easing.sharp,	
      duration: theme.transitions.duration.leavingScreen,	
    }),	
  },	
  appBarShift: {	
    width: `calc(100% - ${drawerWidth}px)`,	
    marginLeft: drawerWidth,	
    transition: theme.transitions.create(['margin', 'width'], {	
      easing: theme.transitions.easing.easeOut,	
      duration: theme.transitions.duration.enteringScreen,	
    }),	
  },	
  menuButton: {	
    marginLeft: 12,	
    marginRight: 20,	
  },	
  hide: {	
    display: 'none',	
  },	
  drawer: {	
    width: drawerWidth,	
    flexShrink: 0,	
  },	
  drawerPaper: {	
    width: drawerWidth,	
  },	
  drawerHeader: {	
    display: 'flex',	
    alignItems: 'center',	
    padding: '0 8px',	
    ...theme.mixins.toolbar,	
    justifyContent: 'flex-end',	
  },	
  content: {	
    flexGrow: 1,	
    padding: theme.spacing.unit * 3,	
    transition: theme.transitions.create('margin', {	
      easing: theme.transitions.easing.sharp,	
      duration: theme.transitions.duration.leavingScreen,	
    }),	
    marginLeft: -drawerWidth,	
  },	
  contentShift: {	
    transition: theme.transitions.create('margin', {	
      easing: theme.transitions.easing.easeOut,	
      duration: theme.transitions.duration.enteringScreen,	
    }),	
    marginLeft: 0,	
  },
  hover: {
    '&:hover': {
      transform: 'translate(20px, 0)',
      color: 'crimson',
    },
  },
  twitSucess: {
    color: 'green',
  },
  twitFail: {
    color: 'red',
  },
  dataSucess: {
    color: 'green',
  },
  dataFail: {
    color: 'red',
  },
  dataFailSub: {
    color: 'grey',
  },					
});	
class PersistentDrawerLeft extends React.Component {	
  state = {	
    open: true,	
    urls: ['bob'],
    gauUrls: ['bob'],
    itemItemUrls: ['bob'],
    matrixUrls: ['bob'],
    twitterInfo: ['bob'],
    value: 0, 
    keepContent_matrix: false,
    keepContent_item: false,
    keepContent_user: false,
    keepContent_gau: false,
    recent_activity: ['bob'],
  };	

  searchButton = e => {
    this.setState({'keepContent_matrix': false });
    this.setState({'keepContent_item': false });
    this.setState({'keepContent_user': false });
    this.setState({'keepContent_gau': false });
    localStorage.clear();
    e.preventDefault();
    this.props.searchPage();
  };

  handleDrawerOpen = () => {	
    this.setState({ open: true });	
  };	
  handleDrawerClose = () => {	
    this.setState({ open: false });	
  };	

  //*** */
  changeVisit_matrix = () => {
    this.setState({'keepContent_matrix': true });
  };

  changeVisit_item = () => {
    this.setState({'keepContent_item': true });
  };

  changeVisit_user = () => {
    this.setState({'keepContent_user': true });
  };

  changeVisit_gau = () => {
    this.setState({'keepContent_gau': true });
  };


  checkEvent = () => {	
    this.setState({value : 0})	
    console.log({value : 0})	
  }	
  checkEvent1 = () => {	
    this.setState({value : 1})	
    console.log({value : 1})	
  }	
  checkEvent2 = () => {	
    this.setState({value : 2})	
    console.log({value : 2})	
  }	
  checkEvent3 = () => {	
    this.setState({value : 3})	
    console.log({value : 3})	
  }	

  checkEvent4 = () => {	
    this.setState({value : 4})	
    console.log({value : 4})	
  }	
  checkEvent5 = () => {	
    this.setState({value : 5})	
    console.log({value : 5})	
  }	
  checkEvent6 = () => {	
    this.setState({value : 6})	
    console.log({value : 6})	
  }	
  checkEvent7 = () => {	
    this.setState({value : 7})	
    console.log({value : 7})	
  }	
  checkEvent8 = () => {	
    this.setState({value : 8})	
    console.log({value : 8})	
  }


  handleChange = (event, value) => {	
      this.setState({ value })	
      console.log(value)	
  }	
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount() {
      const { values, handleChange } = this.props
      this.dude = ''

      fetch(`/Twitter_Info/${values.username}`)
      .then(res => res.json())
      .then(twitterInfo => this.setState({twitterInfo : twitterInfo}, () => console.log('Twitter data ...', twitterInfo)));
            
      
      fetch(`/GAU_Info/${values.username}`)
      .then(res => res.json())
      .then(url => this.setState({gauUrls : url}, () => console.log('Gau Urls fetched...', url)));
      console.log(this.state.gauUrls)
      
      fetch(`/mongotest/${values.username}`)
      .then(res => res.json())
      .then(url => this.setState({urls : url}, () => console.log('User Urls fetched...', url)));
      console.log(this.state.urls)

      fetch(`/mongo_Item/${values.username}`)
      .then(res => res.json())
      .then(url => this.setState({itemItemUrls : url}, () => console.log('Gau Urls fetched...', url)));
      console.log(this.state.itemItemUrls)

      fetch(`/Matrix_Info/${values.username}`)
      .then(res => res.json())
      .then(url => this.setState({matrixUrls : url}, () => console.log('Matrix Urls fetched...', url)));
      console.log(this.state.matrixUrls)

      fetch(`/Recent_Activity/${values.username}`)
      .then(res => res.json())
      .then(recent_activity => this.setState({recent_activity : recent_activity}, () => console.log('Recent Activity Data...', recent_activity)));
      console.log("*****", this.state.recent_activity)
    

      }


  render() {	
    const { classes, theme } = this.props;	
    const { open } = this.state;	
    const { value } = this.state;
    const { urls, recent_activity, twitterInfo, gauUrls, itemItemUrls, matrixUrls, keepContent_matrix, keepContent_item, keepContent_user, keepContent_gau } = this.state;
    const { values } = this.props;

    var notInDataBase = false
    if(gauUrls == null) {
      console.log("So it is null")
      notInDataBase = true
    } else {
      console.log("So it is not null!")
    }

    var activateButton = true;

    try{
      if(twitterInfo[0].hasOwnProperty('code')) {
        console.log("Error", twitterInfo[0].message)
        activateButton = false;
      } else if(twitterInfo.hasOwnProperty('id')){
        console.log("No Error")
      }
      }
      catch(err) {
        console.log("Keep waiting")
      }

      console.log("This is the username", values.username)
      if (values.username == "" || values.username == null) {
        notInDataBase = true;
        activateButton = false;
      }

    return (	
      <div className={classes.root}>	
        <CssBaseline />	
        <AppBar	
          position="fixed"	
          color= "primary"
          className={classNames(classes.appBar, {	
            [classes.appBarShift]: open,	
          })}	
        >	
          <Toolbar disableGutters={!open}>	
            <IconButton	
              color="inherit"	
              aria-label="Open drawer"	
              onClick={this.handleDrawerOpen}	
              className={classNames(classes.menuButton, open && classes.hide)}	
            >	
              <MenuIcon />	
            </IconButton>
            <Typography variant="h5" color="inherit" noWrap>	
              Mitigating the Impact of Fake News	
            </Typography>
          </Toolbar>	
          </AppBar>	
        <Drawer	
          value ={value}	
          className={classes.drawer}	
          variant="persistent"	
          anchor="left"	
          open={open}	
          classes={{	
            paper: classes.drawerPaper,	
          }}	
        >	
          <div className={classes.drawerHeader}>	
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SearchIcon />}
                onClick={this.searchButton}
              >
                Search
            </Button>
            <IconButton onClick={this.handleDrawerClose}>	
               <ChevronLeftIcon />	
            </IconButton>	
          </div>	
          <Divider />	
          <List>
           <Typography color='primary' align='center' variant='h6'>
            <h2>Results</h2>
           </Typography>
            
            	
            <ListItem button onClick={this.checkEvent} onChange={this.handleChange} className={classes.hover}>	
                <ListItemIcon>	
                    <TwitterIcon/>	
                </ListItemIcon>	
                <ListItemText primary='Twitter'/>	
            </ListItem>	

            {
              !notInDataBase ? 
              <ListItem button onClick={this.checkEvent1} onChange={this.handleChange} className={classes.hover}>	
                <ListItemIcon>	
                    <MeetingRoomIcon/>	
                </ListItemIcon>	
                <ListItemText primary='GAU Results'/>	
            </ListItem>
              : 
              <ListItem button onClick={this.checkEvent1} onChange={this.handleChange} className={classes.hover} disabled>	
                <ListItemIcon>	
                    <MeetingRoomIcon/>	
                </ListItemIcon>	
                <ListItemText primary='GAU Results'/>	
            </ListItem>
              }


            {
              !notInDataBase ? 
              <ListItem button onClick={this.checkEvent8} onChange={this.handleChange} className={classes.hover}>	
                <ListItemIcon>	
                    <BlurLinearIcon/>	
                </ListItemIcon>	
                <ListItemText primary='Matrix Factorization'/>	
            </ListItem>	
              : 
              <ListItem button onClick={this.checkEvent8} onChange={this.handleChange} className={classes.hover} disabled>	
                <ListItemIcon>	
                    <BlurLinearIcon/>	
                </ListItemIcon>	
                <ListItemText primary='Matrix Factorization'/>	
            </ListItem>	
            }
  
            {!notInDataBase ? 
              <ListItem button onClick={this.checkEvent2} onChange={this.handleChange} className={classes.hover}>	
                <ListItemIcon>	
                    <PersonIcon/>	
                </ListItemIcon>	
                <ListItemText primary='Item Based'/>	
            </ListItem>	 
            : 
            <ListItem button onClick={this.checkEvent2} onChange={this.handleChange} className={classes.hover} disabled>	
                <ListItemIcon>	
                    <PersonIcon/>	
                </ListItemIcon>	
                <ListItemText primary='Item Based'/>	
            </ListItem>	
            }


            {!notInDataBase ? 
              <ListItem button onClick={this.checkEvent3} onChange={this.handleChange} className={classes.hover}>	
                <ListItemIcon>	
                    <HttpIcon/>	
                </ListItemIcon>	
                <ListItemText primary='User Based'/>	
            </ListItem>	 
            : 
            <ListItem button onClick={this.checkEvent3} onChange={this.handleChange} className={classes.hover} disabled>	
                <ListItemIcon>	
                    <HttpIcon/>	
                </ListItemIcon>	
                <ListItemText primary='User Based'/>	
            </ListItem>	
            }

            
          </List>	
          <Divider />	
            <List>
                <Typography color='error' align='center' variant='h6'>
                  <h2>About</h2>
                </Typography>	
                <ListItem button onClick={this.checkEvent4} onChange={this.handleChange} className={classes.hover}>	
                    <ListItemIcon>	
                        <NavigationIcon/>	
                    </ListItemIcon>	
                    <ListItemText primary='Navigation'/>	
                </ListItem>	
                <ListItem button onClick={this.checkEvent5} onChange={this.handleChange} className={classes.hover}>	
                    <ListItemIcon>	
                        <BuildIcon/>	
                    </ListItemIcon>	
                    <ListItemText primary='How it Works'/>	
                </ListItem>	
                <ListItem button onClick={this.checkEvent6} onChange={this.handleChange} className={classes.hover}>	
                    <ListItemIcon>	
                        <InfoIcon/>	
                    </ListItemIcon>	
                    <ListItemText primary='About Us'/>	
                </ListItem>	
                <ListItem button onClick={this.checkEvent7} onChange={this.handleChange} className={classes.hover}>	
                    <ListItemIcon>	
                        <SchoolIcon/>	
                    </ListItemIcon>	
                    <ListItemText primary='MQP and WPI'/>	
                </ListItem>	
            </List>

          <Divider />
        </Drawer>	
        <main	
          className={classNames(classes.content, {	
            [classes.contentShift]: open,	
          })}	
        >	
          <div className={classes.drawerHeader} onChange={this.handleChange}/>	
        {value === 111 && <Conteudo> <Button variant="contained" color="primary">Default</Button> </Conteudo>}	


        {value === 0 && 
        <Conteudo>
          <Typography color='primary' align='center' variant='h5'>
              <h2>Twitter Information</h2>
          </Typography>
          {activateButton ? 
            <Typography className={classes.twitSucess} variant='h5' align='left'>	
              <strong>Located User in Twitter!</strong><ThumbUpIcon/>
            </Typography> 
          : 
          <Typography className={classes.twitFail} variant='h5' align='left'>	
              <strong>Twitter User not Found</strong><ErrorOutlineIcon/>
            </Typography>
          }

          {!notInDataBase ? 
            <Typography className={classes.dataSucess} variant='h5' align='left'>	
              <strong>User Found in Dataset!</strong><ThumbUpIcon/>
            </Typography>	 
          : 
          <div>
          <Typography className={classes.dataFail} variant='h5' align='left'>	
              <strong>User not in DataSet</strong><ErrorOutlineIcon/>	
            </Typography>
            <Typography className={classes.dataFailSub} align='left'>	
              User must be in dataset to get URL Recommendations	
            </Typography>
          </div>
          }
          <Twitter 
            values = { values } 
            twitterInfo = { twitterInfo }
            recent_activity = {recent_activity}
            />
        </Conteudo>}	
        {value === 1 && 
        <Conteudo> 
          <GAU 
          urls = { gauUrls }
          keepContent_gau = { keepContent_gau }
          changeVisit_gau={this.changeVisit_gau}
          />
        </Conteudo>}

        {value === 8 && 
        <Conteudo> 
          <Matrix_Factorization 
          urls = { matrixUrls }
          keepContent_matrix = { keepContent_matrix }
          changeVisit_matrix={this.changeVisit_matrix}
          />
          
        </Conteudo>}

        {value === 2 && 
        <Conteudo>
            <Expansion_Item 
            urls = { itemItemUrls }
            keepContent_item = { keepContent_item }
            changeVisit_item={this.changeVisit_item} />
        </Conteudo>}

        {value === 3 && 
        <Conteudo>
            
            <Expansion 
            urls = { urls }
            keepContent_user = { keepContent_user }
            changeVisit_user={this.changeVisit_user} /> 
        </Conteudo>}
        {value === 4 && <Conteudo>
          <Typography color='primary' align='center' variant='h5'>
          <h2>Navigation</h2>
          </Typography>
          <Navigation/>

        </Conteudo>}
        {value === 5 && <Conteudo>
          <Typography color='primary' align='center' variant='h5'>
          <h2>How it Works</h2>
          </Typography>
          <How_It_Works/>
        </Conteudo>}
        {value === 6 && <Conteudo>
          <Typography color='primary' align='center' variant='h5'>
          <h2>About Us</h2>
          </Typography>
          <About_Us/>
        </Conteudo>}
        {value === 7 && <Conteudo>
          <Typography color='primary' align='center' variant='h5'>
          <h2>WPI and the MQP</h2>
          </Typography>
          <WPI_and_MQP/>
        </Conteudo>}
        
        </main>	
    );	

      </div>
    );	
  }	
}	
PersistentDrawerLeft.propTypes = {	
  classes: PropTypes.object.isRequired,	
  theme: PropTypes.object.isRequired,	
};	
export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);	
