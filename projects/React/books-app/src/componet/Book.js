import React, { Component } from 'react';

class Book extends Component {
render() {
 
    return (
        <div>
        <p><b>title:</b><a href={this.props.infoLink}>{this.props.title} </a> </p>
        <img src={this.props.thumbnail}></img>
        <p><b>description:</b> {this.props.description} </p>
        <p><b>categories:</b> {this.props.categories} </p>
        <hr />
        </div>
        )
}
}

export default Book;