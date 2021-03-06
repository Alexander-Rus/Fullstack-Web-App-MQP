import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'
import { GradientLightgreenGreen as LightGreen } from '@vx/gradient'
import { GradientLightgreenGreen as DarkGreen } from '@vx/gradient'
import { GradientTealBlue as TealBlue } from '@vx/gradient'
import { GradientPinkBlue as PinkBlue } from '@vx/gradient'
import { GradientPinkRed as PinkRed } from '@vx/gradient'
import * as easings from 'd3-ease'

console.log(easings)

export default class Star_teal_blue extends React.Component {
  state = { 
    offset: 0, 
  }
  path = React.createRef()

  componentDidMount() {
    this.setState({ offset: this.path.current.getTotalLength() })
  }

  properLength(val, type) {
      if(type === 'user') {
          return val * 4000
      } else if(type ==='item') {
          return val * 4000
      } else if(type === 'matrix') {
          return val * 133
      } else if(type === 'gau') {
          return val * 400
      }
    }

  render() {
    const { offset } = this.state
    const {val, type} = this.props
    const newVal = this.properLength(val, type)
    console.log("this is the type", type)

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
        >
        <svg width={newVal} height="60" >
          <TealBlue id="gradient-dashoffset" />
          <g
            fill="#fff"
            stroke="url(#gradient-dashoffset)"
            strokeWidth="30">
            <Spring
              native
              reset
              from={{ dash: offset }}
              to={{ dash: 0 }}
              config={{
                delay: 100,
                duration: 600,
                easing: easings.easeCubic,
              }}>
              {props => (
                <animated.path
                  ref={this.path}
                  strokeDasharray={offset}
                  strokeDashoffset={props.dash}
                  d="M 0 15 H 300 V 45 L 0 45"
                />
              )}
            </Spring>
          </g>
        </svg>
      </div>
    )
  }
}