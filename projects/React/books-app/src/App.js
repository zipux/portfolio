import React, { Component } from 'react';
import List from './componet/List';
import Spinner from './componet/Spinner';
import './App.css'

const init_param = 'Harry Potter'

class App extends Component {

  constructor (props) {
    super (props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
    this.state = { list: [] , }
      }

  componentDidMount() {   
    this.search(init_param) 
  }

  handleSubmit  (event)  {
    let querySearch = event.target.elements.query.value;

    this.setState({ 
      value: querySearch 
    });
    if ( querySearch === '' ) {
      this.search(init_param);
    } else {
      this.search(querySearch);
    }
    event.preventDefault() 
  }

  search(text) {
      this.setState({ msg: 'searching' }); 
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + text)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        if (myJson.totalItems > 0 ) {
          this.setState({list: myJson.items, msg: ''});
        } else {
          this.setState({list: [], msg: 'no books found for ' + text });
        }
      })
  }

  render() {
    return (
      <div className="App">
      <Spinner status={this.state.msg} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" placeholder={init_param} />
          <input type="submit" value="Search" />
        </form>
        <p> {this.state.msg } </p>
        <List items={this.state.list} />
      </div>
    );
  }
}

export default App;
