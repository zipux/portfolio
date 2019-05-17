import React, { Component } from 'react';
import User from './Component/User';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResult: []
    }
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=25')
    .then(resp => resp.json())
    .then(resp => {
      this.setState({searchResult: resp.results })
    });
  }
  delete(key) {
    let newSearchResult =  this.state.searchResult;
    newSearchResult.splice(key, 1);
    this.setState({searchResult: newSearchResult})
  }
  render() {
   
    return (
      <div className="App">
       
       {this.state.searchResult.map( (user, key) => {
      
          return (
          <span>
           <button onClick={this.delete.bind(this, key)}>Delete</button>
           <User 
            gender={user.gender}
            nationality={user.nat}
            name={user.name.first}
            lastName={user.name.last}
            image={user.picture.thumbnail}
            city={user.location.city}
            state={user.location.state}
            email={user.email}
          /> 
          </span>
          )
        })}
      </div>
    );
  }
}

export default App;
