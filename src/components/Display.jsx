import React, { Component } from 'react';
import './css/display.css'

class Display extends Component {
    render() {
        const string = this.props.inputData
        return <div className='Display'> {string} </div>
    }
}

export default Display 