import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from './MarkDown/Navigation'

export class About extends Component {
    searchButton = e => {
        e.preventDefault();
        this.props.searchPage();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title="Navigation" />
                  <Navigation/> 
                  <RaisedButton 
                  label="Okay got it!"
                  primary= { true }
                  style = {styles.button}
                  onClick={this.searchButton}
                  />

                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

const styles = {
    button: {
       margin: 15 
    }
}

export default About