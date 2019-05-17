import React, { Component } from 'react';
import male from './male.png' ;
import female from './female.jpg' ;
import usFlag from './us_flag.jpg';

class User extends Component {
    userImage = () => {
      if (this.props.gender === 'male') {
        return male
      } else {
        return  female
      }
    }

    userNat = () => {
      if (this.props.nationality === 'US') {
        return usFlag
      } else {
        return ''
      }
    } 
    render () {
        return (
          <div>
            <p>Name:{this.props.name}</p>
            <p>lastName:{this.props.lastName}</p>
            <img src= {this.userNat()} width = '200'/>
            <img src= {this.userImage()}/>
            <img src= {this.props.image}/>
            <p>city:{this.props.city}</p>
            <p>state:{this.props.state}</p>
            <p>email:{this.props.email}</p>
            <hr />
          </div>
        )
    }
}

export default User
