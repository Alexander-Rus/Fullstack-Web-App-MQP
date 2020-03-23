import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import './styles.css'


export default class Username extends React.PureComponent {
  state = { 
      repeat: false,
      show1: false, 
      show2: false,
      show3: false,
      show4: false,
      show5: false, 
    }

  showGoodStuff() {
      console.log("Called the function")
    this.setState({show1 : true })
    setTimeout(function() {
        this.setState({show1 : false })
        this.setState({show2: true })
      }.bind(this), 3000)
      setTimeout(function() {
        this.setState({show2 : false })
        this.setState({show3: true })
      }.bind(this), 6000)
      setTimeout(function() {
        this.setState({show3 : false })
        this.setState({show4: true })
      }.bind(this), 9000)
      setTimeout(function() {
        this.setState({show4 : false })
        this.setState({show5: true })
      }.bind(this), 12000)
      setTimeout(function() {
        this.setState({show5 : false })
      }.bind(this), 15000)

  }


  componentDidMount() {
    this.showGoodStuff();
    setInterval(function(){
      this.setState({show1 : true })
      setTimeout(function() {
        this.setState({show1 : false })
        this.setState({show2: true })
      }.bind(this), 3000)
      setTimeout(function() {
        this.setState({show2 : false })
        this.setState({show3: true })
      }.bind(this), 6000)
      setTimeout(function() {
        this.setState({show3 : false })
        this.setState({show4: true })
      }.bind(this), 9000)
      setTimeout(function() {
        this.setState({show4 : false })
        this.setState({show5: true })
      }.bind(this), 12000)
      setTimeout(function() {
        this.setState({show5 : false })
      }.bind(this), 15000)
      
    }.bind(this), 16000);
  }

  render() {
    return (
        <div>
            <div className="reveals-main">
                <Transition
                native
                items={this.state.show1}
                from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}>
                {show =>
                    show && (props => <animated.div style={props}>'V2theS'</animated.div>)
                }
                </Transition>
            </div>
            <div className="reveals-main">
                <Transition
                native
                items={this.state.show2}
                from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}>
                {show =>
                    show && (props => <animated.div style={props}>'LantisArmstrong'</animated.div>)
                }
                </Transition>
            </div>
            <div className="reveals-main">
                <Transition
                native
                items={this.state.show3}
                from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}>
                {show =>
                    show && (props => <animated.div style={props}>'ZubinF'</animated.div>)
                }
                </Transition>
            </div>
            <div className="reveals-main">
                <Transition
                native
                items={this.state.show4}
                from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}>
                {show =>
                    show && (props => <animated.div style={props}>'Dupe1970'</animated.div>)
                }
                </Transition>
            </div>
            <div className="reveals-main">
                <Transition
                native
                items={this.state.show5}
                from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}>
                {show =>
                    show && (props => <animated.div style={props}>'DMashak'</animated.div>)
                }
                </Transition>
            </div>


        </div>
      
    )
  }
}