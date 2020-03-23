import React, { Component } from 'react'
import About from './About'
import Persistent_Drawer from './Persistent_Drawer'
import SignInSide from './SignIn_Inside';
import Particles from 'react-particles-js';


const styles = {
    particles: {
        position: 'absolute',
        top:0,
        left:0,
      },
      SignIn:{
          position: 'absolute',
          left: '20vw',
      }

}

export class AppLayout extends Component {
    state = {
        step: 1,
        username: "",
        url: ['Alphabet stew'],
        twitter: [], 
        keepContent: false
    }

    //Procedd to next step
    nextStep = () => {
        //We are pulling the step out of the state
        const { step } = this.state;
        this.setState({
            step: step + 1 //Increment by 1 to get to the next step
        })
    }

    //Go back to previous step
    prevStep = () => {
        //We are pulling the step out of the state
        const { step } = this.state;
        this.setState({
            step: step - 1 //Increment by 1 to get to the next step
        })
    }

    aboutPage = () => {
        //We are pulling the step out of the state
        const { step } = this.state;
        this.setState({
            step: 3 //set to 3 for the About page
        })
    }

    searchPage = () => {
        //We are pulling the step out of the state
        const { step } = this.state;
        this.setState({
            step: 1 //set to 3 for the About page
        })
    }

    newSearch = () => {
        //We are pulling the step out of the state
        const { keepContent } = this.state;
        this.setState({
            keepContent: true //set new search to false if it is the same search
        })
    }

    handleChange = input => e => {
        var str = e.target.value
        var result = ''
        if(str.includes('@')){
            result = str.slice(1) 
        }
        else {
            result = str
        }
        this.setState({[input]: result});
    }

    render() {
        const { step } = this.state;
        const { username, url, twitter, keepContent } = this.state;
        const values = { username, url, twitter, keepContent }
        
        switch(step) {
            case 1:
                return (
                    <div >
                        <div >
                        <Particles
                        style={styles.particles}
                            params={{
                                "particles":{
                                    "number":{
                                        "value":60
                                    },
                                    "color":{
                                        "value": "#03a9fc"
                                    },
                                    "shape":{
                                        "type":"image",
                                        "image":{
                                            "src":'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png',
                                            
                                        }
                                    },
                                    "opacity":{
                                        "value":0.5,
                                        "random": true,
                                        "anim":{
                                            "enable":true,
                                            "speed":1
                                        }
                                    },
                                    "size":{
                                        "value": 30,
                                        "random":true,
                                        "anim":{
                                            "enable":true,
                                            "speed": 10
                                        }
                                    },
                                    "line_linked":{
                                        "enable": true,
                                        "color":"#03a9fc",
                                        "width": 2
                                    },
                                    "move":{
                                        "enable":  true,
                                        "speed": 2
                                    }
                                },

                                "interactivity":{
                                    "events":{
                                        "onhover":{
                                            "enable": true,
                                            "mode":"repulse"
                                        },
                                        "onclick":{
                                            "enable": true,
                                            "mode": "push"

                                        }
                                    },
                                    "modes":{
                                        "repulse":{
                                            "distance":50,
                                            "duration":0.4
                                        }
                                    }
                                }
                            }}
                        />

                        </div>
                        <div style={styles.SignIn}>
                            <SignInSide
                            nextStep={this.nextStep}
                            aboutPage={this.aboutPage}
                            handleChange={this.handleChange}
                            values = {values}
                            />
                        </div>
                    </div>
                )
            case 2:
                return (
                    <Persistent_Drawer
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    searchPage={this.searchPage}
                    keepContent={this.keepContent}
                    newSearch={this.newSearch}
                    values = {values}

                    />
                )
            case 3:
                return (
                    <About
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    searchPage={this.searchPage}
                    values = {values}
                    />
                )
        }
    }
}

export default AppLayout