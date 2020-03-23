import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GAU_Explanation from './GAU_Explanation';
import Web from './Web_Explanation';
import User from './User_Explanation';
import Item from './Item_Explanation';
import Matrix from './Matrix_Explanation';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="GAU Model" {...a11yProps(0)} />
          <Tab label="Matrix Factorization" {...a11yProps(1)} />
          <Tab label="User Based" {...a11yProps(2)} />
          <Tab label="Item Based" {...a11yProps(3)} />
          <Tab label="Web Application" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GAU_Explanation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Matrix/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <User/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Item/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Web/>
      </TabPanel>
    </div>
  );
}