import React, { Component } from 'react';
import spinner from './spinner.gif' ;

class Spinner extends Component {
    render() {
        if (this.props.status === 'searching') {
            return (
                <img src={spinner} />
            )  
        } else {
            return('')
        }
        }
    }

export default Spinner;